const { response } = require('express');
const fetch = require('node-fetch');
const axios = require('axios');

const apiKey="42d845ec0caf10ecc9f34f1648197aee";
const videoBase = "https://www.youtube.com/watch?v=";

const State = {
    movieList: [],
    tvshowList: []    
}

// get the list of now playing ids for movies
const movieDetails = () => {
    
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=5`;  
    return new Promise( (resolve, reject) => {

        fetch(url)
        .then(response => response.json())
        .then( (data) => {

            
            var i = 0;
            var fullmovieList=[]
            for(;i<data.results.length;i++){
                fullmovieList.push(data.results[i].id)

                }

                resolve({
                    'movies': fullmovieList
                },
                (error) => {
                    reject(error);
                }
            )
        })
            
    })
}

// get the list of now playing ids for tvshows

const tvshowDetails = () => {
    
    const url = `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&language=en-US&page=1`;  
    return new Promise( (resolve, reject) => {

        fetch(url)
        .then(response => response.json())
        .then( (data) => {

            
            var i = 0;
            var tvList=[]
            for(;i<data.results.length;i++){
                tvList.push(data.results[i].id)

                }

                resolve({
                    'tvshows': tvList
                },
                (error) => {
                    reject(error);
                }
            )
        })
            
    })
}





const getnowPlaying = async (req, res) => {

    var moviedetails = await movieDetails();
    State.movieList = moviedetails.movies;
    var tvshowdetails = await tvshowDetails();
    State.tvshowList = tvshowdetails.tvshows;

    res.send(State)

}


module.exports = {
    getnowPlaying

}