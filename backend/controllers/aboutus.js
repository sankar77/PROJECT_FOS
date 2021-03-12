'use strict';

const firebase = require('../db');
const AboutUs = require('../models/aboutus');
const firestore = firebase.firestore();

const addAboutUs = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('aboutus').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAboutUsAll = async (req, res, next) => {
    try {
        const aboutUsAll = await firestore.collection('aboutus');
        const data = await aboutUsAll.get();
        const aboutUsAllArray = [];
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            data.forEach(doc => {
                const student = new AboutUs(
                    doc.data().firstName,
                    doc.data().lastName,
                    doc.data().email
                );
                aboutUsAllArray.push(student);
            });
            res.send(aboutUsAllArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addAboutUs,
    getAboutUsAll
}
