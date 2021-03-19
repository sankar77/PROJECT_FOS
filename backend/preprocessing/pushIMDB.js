'use strict';

const StreamArray = require( 'stream-json/streamers/StreamArray');
const fs = require('fs');

const firebase = require('../db');
const firestore = firebase.firestore();

const jsonStream = StreamArray.withParser();

fs.createReadStream('show_mappings_4.json').pipe(jsonStream.input);

jsonStream.on('data', async ({key, value}) => {
    await firestore.collection('imdb_shows').doc().set(value);
    console.log(key);
});

jsonStream.on('end', async () => {
    await console.log('All Done');
});