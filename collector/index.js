const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const { pollFromQueue, pushToQueue, queueURL } = require('./queues/main')


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.listen(config.port, () => {
    console.log(`Server is running on port: ${config.port}`);
});




const {getnowPlaying} = require('./controllers/collector');

const schedule = require('node-schedule');

const rule = new schedule.RecurrenceRule();
rule.minute = 0;

const job= schedule.scheduleJob(rule, function(){
    getnowPlaying();
});


app.get('/', (req,res) => {
    res.send("Hello World!")
});
