const { response } = require('express');
const fetch = require('node-fetch');

const apiKey="42d845ec0caf10ecc9f34f1648197aee";
const imageBase = "http://image.tmdb.org/t/p/w185";
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
        
    fetch(url)
    .then(response => response.json())
    .then(data => {
        movieState.detailsData = data;
        movieState.genres = data.genres.map( genreInfo => genreInfo.name );
        movieState.productionCompanies = data.production_companies.map( prodInfo => prodInfo.name );
        movieState.summary = data.overview;
    });
}

const fetchCastAndCrew = (movieID) => {

    const url = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${apiKey}&language=en-US`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        movieState.cast = data.cast.map( eachCast => `${eachCast.name}`);
        movieState.crew = data.crew.map( eachCrew => `${eachCrew.name} [${eachCrew.department}]`);
    });
}

const fetchReviews = (movieID) => {

    const url = `https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        movieState.reviews = data.results.map( eachReviewInfo => `${eachReviewInfo.content} - ${eachReviewInfo.author}` );
    })

}

const fetchVideos = (movieID) => {

    const url = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${apiKey}&language=en-US`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        movieState.videos = data.results.map( eachVideoInfo => [`${videoBase}${eachVideoInfo.key}`, `${eachVideoInfo.type}`] );
    })

}

const fetchProviders = (movieID) => {

    const url = `https://api.themoviedb.org/3/movie/${movieID}/watch/providers?api_key=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        movieState.providers = data.results['US']['buy'].map( eachProvider => `${eachProvider.provider_name}`);
    })

}


const fetchMovie = (req, res) => {

    const movieID = req.params.id;
    movieState.showID = movieID;

    fetchDetails(movieID);
    fetchCastAndCrew(movieID);
    fetchReviews(movieID);
    fetchVideos(movieID);
    fetchProviders(movieID);
    
    res.send(movieState)
}

module.exports = {
    fetchMovie
}