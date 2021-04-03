const { response } = require('express');
const fetch = require('node-fetch');
const axios = require('axios');
const firebase = require('../db');
const firestore = firebase.firestore();

const apiKey="42d845ec0caf10ecc9f34f1648197aee";
const videoBase = "https://www.youtube.com/watch?v=";

const State = {
    movieList: [],
    tvshowList: []    
}

// get the list of now playing ids for movies
 const movieDetails = async() => {
    
    const moviesTvshows =  await firestore.collection('collector').doc('new_doc');
    console.log("movietvshows are ",moviesTvshows);
    const moviedata =  await moviesTvshows.get();
    console.log("data  are ",moviedata);
    return new Promise( (resolve, reject) => {

        resolve({
            'movies': moviedata.data().movieList
        },
        (error) => {
            reject(error);
        }
         )
            
    }
    
    )
}

// get the list of now playing ids for tvshows

 const tvshowDetails = async () => {
    const moviesTvshows =  await firestore.collection('collector').doc('new_doc');
    const tvshowdata =  await moviesTvshows.get();
    return new Promise( (resolve, reject) => {
        resolve({
            'tvshows': tvshowdata.data().tvshowList
        },
        (error) => {
            reject(error);
        }
        )
    }
    )
}





const getnowPlaying = async (req, res) => {

    var moviedetails = await movieDetails();

    State.movieList = moviedetails.movies;
    console.log("movies is",State.movieList);
    var tvshowdetails = await tvshowDetails();
    State.tvshowList = tvshowdetails.tvshows;
    console.log("tv show",State.tvshowList);

    res.send(State)

}


module.exports = {
    getnowPlaying

}