const { response } = require('express');
const fetch = require('node-fetch');
var Sentiment = require('sentiment');
var sentiment = new Sentiment();

const apiKey="42d845ec0caf10ecc9f34f1648197aee";
const videoBase = "https://www.youtube.com/watch?v=";

const movieState = {
    showID: "",
    detailsData: {},
    genres: [],
    productionCompanies: [],
    cast: [],
    crew: [],
    reviews: [],
    videos: [],
    providers: [],
    summary: ""
}

const fetchDetails = (movieID) => {
    
    const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US&external_source=imdb_id`;
    
    return new Promise( (resolve, reject) => {

        fetch(url)
        .then(response => response.json())
        .then( (data) => {
                
                try {
                    var detailsData = data;
                } catch (error) {
                    var detailsData = {}
                }

                try {
                    var genres = data.genres.map( genreInfo => genreInfo.name );
                } catch (error) {
                    var genres = ["Currently No Info Available on Genres..."];
                }
                
                try {
                    var productionCompanies = data.production_companies.map( prodInfo => prodInfo.name );
                } catch (error) {
                    var productionCompanies = ["Currently No Info Available on Production Companies..."];
                }

                try {
                    var summary = data.overview;  
                } catch (error) {
                    var summary = "No Summary Available for this Movie..."
                }

                resolve({
                    'detailsData': detailsData,
                    'genres': genres,
                    'productionCompanies': productionCompanies,
                    'summary': summary
                },
                (error) => {
                    reject(error);
                }
            );
        })
    })
}

const fetchCastAndCrew = (movieID) => {

    const url = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${apiKey}&language=en-US`;

    return new Promise( (resolve, reject) => {

        fetch(url)
        .then(response => response.json())
        .then( (data) => {
            
            try {
                var cast = data.cast.map( eachCast => `${eachCast.name}`);
            }
            catch(error) {
                var cast = ["No Cast Information Available!"]
            }

            try {
                var crew = data.crew.map( eachCrew => `${eachCrew.name} [${eachCrew.department}]`);
            }
            catch(error) {
                var crew = ["No Crew Information Available!"]
            }

            resolve({
                'cast': cast,
                'crew': crew
            });
        },
            (error) => {
                reject(error);
            }
        );
    })
}

const fetchReviews = (movieID) => {

    const url = `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${apiKey}`;

    return new Promise( (resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then( (data) => {
                try {
                    var reviews = data.results.map( eachReviewInfo => `${eachReviewInfo.content}` );
                    var sentiments = reviews.map( review => [review, sentiment.analyze(review).comparative] );
                }
                catch(error) {
                    var reviews = [["There aren't any reviews for you!", 0]]
                }
                resolve(sentiments);
            },
            (error) => {
                reject(error);
            }
        );
    })

}

const fetchVideos = (movieID) => {

    const url = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${apiKey}&language=en-US`;

    return new Promise( (resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then( (data) => {
                try {
                    var videos = data.results.map( eachVideoInfo => [`${videoBase}${eachVideoInfo.key}`, `${eachVideoInfo.type}`] );
                }
                catch(error) {
                    var videos = ["Videos Currently Unavailable"]
                }
                resolve(videos);
            },
            (error) => {
                reject(error);
            }
        );
    })

}

const fetchProviders = (movieID) => {

    const url = `https://api.themoviedb.org/3/movie/${movieID}/watch/providers?api_key=${apiKey}`;

    return new Promise( (resolve, reject) => {

        fetch(url)
        .then(response => response.json())
        .then((data) => {
                try{
                    var providers = data.results['US']['buy'].map( eachProvider => `${eachProvider.provider_name}`);
                }
                catch(error){
                    var providers = ["Information Not Available"]
                }
                resolve(providers);
            },
            (error) => {
                reject(error);
            }
        );
    })

}


const fetchMovie = async (req, res) => {

    const movieID = req.params.id;
    movieState.showID = movieID;

    var details = await fetchDetails(movieID);
    movieState.detailsData = details.detailsData;
    movieState.genres = details.genres;
    movieState.productionCompanies = details.productionCompanies;
    movieState.summary = details.summary;
    
    var castCrew = await fetchCastAndCrew(movieID);
    movieState.cast = castCrew.cast;
    movieState.crew = castCrew.crew;
    
    movieState.reviews = await fetchReviews(movieID);
    
    movieState.videos = await fetchVideos(movieID);
    
    movieState.providers = await fetchProviders(movieID);
    
    res.send(movieState)
}

module.exports = {
    fetchMovie, 
    fetchDetails,
    fetchCastAndCrew,
    fetchVideos,
    fetchReviews,
    fetchProviders
}