const express = require('express');

const {getGenres} = require('../controllers/Genres');


const router = express.Router();

router.get('/:genreid', getGenres);


module.exports = {
    routes: router
}