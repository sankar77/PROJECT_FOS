const { response } = require('express');
const fetch = require('node-fetch');

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
                var genres = data.genres.map( genreInfo => genreInfo.name );
                var productionCompanies = data.production_companies.map( prodInfo => prodInfo.name );
                var summary = data.overview;
                resolve({
                    'detailsData': data,
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
            var cast = data.cast.map( eachCast => `${eachCast.name}`);
            var crew = data.crew.map( eachCrew => `${eachCrew.name} [${eachCrew.department}]`);
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
                var reviews = data.results.map( eachReviewInfo => `${eachReviewInfo.content} - ${eachReviewInfo.author}` );
                resolve(reviews);
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
                var videos = data.results.map( eachVideoInfo => [`${videoBase}${eachVideoInfo.key}`, `${eachVideoInfo.type}`] );
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
                var providers = data.results['US']['buy'].map( eachProvider => `${eachProvider.provider_name}`);
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
    fetchMovie
}