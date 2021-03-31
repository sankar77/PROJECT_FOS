const express = require('express');

const {getnowPlaying} = require('../controllers/nowPlaying');


const router = express.Router();

router.get('/', getnowPlaying);


module.exports = {
    routes: router
}