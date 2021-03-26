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


const fetchMovie = (req, res) => {

    const movieID = req.params.id;
    movieState.showID = movieID;

    fetchDetails(movieID);
    // fetchCastAndCrew(movieID);
    // fetchReviews(movieID);
    // fetchVideos(movieID);
    // fetchProviders(movieID);
    
    res.send(movieState)
}

module.exports = {
    fetchMovie
}