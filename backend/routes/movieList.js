const express = require('express');

const {getMovieList} = require('../controllers/movieList');


const router = express.Router();

router.get('/:name', getMovieList);


module.exports = {
    routes: router
}