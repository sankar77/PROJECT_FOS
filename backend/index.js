'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
// const mongoose = require('mongoose');
const aboutUsRoutes = require('./routes/aboutus');
// const aboutUs = require('./models/aboutus');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/aboutus', aboutUsRoutes.routes);

// mongoose.connect('mongodb://localhost:27017/AboutUs', { useNewUrlParser: true, useUnifiedTopology: true }
//     );

// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("MongoDB database connection established successfully");
// });

app.listen(config.port, () => {
    console.log(`Server is running on port: ${config.port}`);
});
