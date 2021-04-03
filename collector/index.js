const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.listen(4000, () => {
    console.log(`Server is running on port: 4000`);
});




const {getnowPlaying} = require('./controllers/collector');

const schedule = require('node-schedule');

const rule = new schedule.RecurrenceRule();
rule.minute = 12;

const job= schedule.scheduleJob(rule, function(){
    console.log("working");
    getnowPlaying();
});


app.get('/', (req,res) => {
    res.send("Hello World!")
});
