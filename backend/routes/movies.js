const express = require('express');

const {
    fetchMovie
} = require('../controllers/movies');

const router = express.Router();

router.get('/:id', fetchMovie);

module.exports = {
    routes: router
}