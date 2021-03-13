'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var https = require('https');
var http = require('http');
var fs = require('fs');
const config = require('./config');
const aboutUsRoutes = require('./routes/aboutus');
var os = require('os');
const homedir = os.homedir();

var key = fs.readFileSync(homedir + '/certs/server.key');
var cert = fs.readFileSync(homedir + '/certs/server.cert');

var options = {
  key: key,
  cert: cert
};

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/aboutus', aboutUsRoutes.routes);

// app.listen(config.port, () => {
//     console.log(`Server is running on port: ${config.port}`);
// });
// http.createServer(app).listen(80);
// https.createServer(options, app).listen(443);

var server = https.createServer(options, app);

server.listen(config.port, () => {
  console.log("server starting on port : " + config.port)
});
