// const router = require('express').Router();

// let AboutUs = require('../models/aboutus');

// router.route('/').get((req, res) => {
//     AboutUs.find()
//       .then(people => res.json(people) )
//       .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//     const firstname = req.body.firstname;
//     const lastname = req.body.lastname;
//     const email = req.body.email;

//     const newPerson = new AboutUs({
//         firstname,
//         lastname,
//         email,
//     });

//     newPerson.save()
//     .then(() => res.json('New Person added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// module.exports = router;

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