const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.listen(config.port, () => {
    console.log(`Server is running on port: ${config.port}`);
});

app.get('/', (req,res) => {
    res.send("Hello World!")
});
