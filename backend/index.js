const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const AboutUsRouter = require('./routes/aboutus');
const AboutUs = require('./models/aboutus');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/aboutus', AboutUsRouter);

mongoose.connect('mongodb://3.17.129.45:27017/AboutUs', { useNewUrlParser: true, useUnifiedTopology: true }
    );

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
