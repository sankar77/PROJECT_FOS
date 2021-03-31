const { response } = require('express');
const fetch = require('node-fetch');
const { fetchMovie }=require('./movies');
const axios = require('axios');

const apiKey="42d845ec0caf10ecc9f34f1648197aee";
const videoBase = "https://www.youtube.com/watch?v=";

const movieState = {
    genreList: [] 
}

// search by name
const searchDetails = (id) => {
    
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`;  
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





const getGenres = async (req, res) => {

    const id = req.params.genreid;
    
    var moviedetails = await searchDetails(id);
    movieState.genreList = moviedetails.movies;

    res.send(movieState)

}


module.exports = {
    getGenres

}