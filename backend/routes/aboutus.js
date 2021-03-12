const express = require('express');

const {addAboutUs, 
       getAboutUsAll
      } = require('../controllers/aboutus');

const router = express.Router();

router.post('/add', addAboutUs);
router.get('/', getAboutUsAll);

module.exports = {
    routes: router
}