'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const aboutUsRoutes = require('./routes/aboutus');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/aboutus', aboutUsRoutes.routes);

app.listen(config.port, () => {
    console.log(`Server is running on port: ${config.port}`);
});
