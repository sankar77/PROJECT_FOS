const { response } = require('express');
const fetch = require('node-fetch');
const { fetchMovie }=require('./movies');
const axios = require('axios');

const apiKey="42d845ec0caf10ecc9f34f1648197aee";
const videoBase = "https://www.youtube.com/watch?v=";

const movieState = {
    movieList: []    
}

// search by name
const searchDetails = (movieName) => {
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movieName}&page=1&include_adult=false`;  
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





const getMovieList = async (req, res) => {

    const moviename = req.params.name;
    movieState.name = moviename; 
    
    var moviedetails = await searchDetails(moviename);
    movieState.movieList = moviedetails.movies;

    res.send(movieState)

}


module.exports = {
    getMovieList

}