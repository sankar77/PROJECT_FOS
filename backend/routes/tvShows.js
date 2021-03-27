const express = require('express');

const {
    fetchTV
} = require('../controllers/tvShows');

const router = express.Router();

router.get('/:id', fetchTV);

module.exports = {
    routes: router
}