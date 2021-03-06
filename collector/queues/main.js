// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

let date_ob = new Date();

// Set the region 
AWS.config.update({region: 'us-east-2'});

mockObject = {
    movieList: [
        580532,
        580175,
        645856,
        627103,
        806067,
        498248,
        463257,
        634521,
        631058,
        799878,
        665779,
        549294,
        587562,
        654754,
        861,
        811828,
        575776,
        566076,
        638045,
        717021
    ],
    tvshowList: [
        88396,
        1416,
        95557,
        79460,
        67133,
        76773,
        2734,
        99121,
        102966,
        71728,
        117422,
        60572,
        80563,
        82822,
        104699,
        99618,
        32692,
        1220,
        87917,
        65988
    ]
}

// Create an SQS service object
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});
var queueURL = "https://sqs.us-east-2.amazonaws.com/274670721002/movies-app-queue";


function pushToQueue(queueURL, messageJSON) {
    var params = {
        MessageBody: JSON.stringify(messageJSON),
        QueueUrl: queueURL
    };

    sqs.sendMessage(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            let date = ("0" + date_ob.getDate()).slice(-2);
            let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
            let year = date_ob.getFullYear();
            let hours = date_ob.getHours();
            let minutes = date_ob.getMinutes();
            let seconds = date_ob.getSeconds();
            console.log(`Pushing data id: ${data.MessageId} to Queue at ${year}-${month}-${date} ${hours}:${minutes}:${seconds}`);
        }
    });
}

async function pollFromQueue(queueURL) {
    return new Promise(res => {
        var params = {
            AttributeNames: [
                "SentTimestamp"
            ],
            MaxNumberOfMessages: 10,
            MessageAttributeNames: [
                "All"
            ],
            QueueUrl: queueURL,
            VisibilityTimeout: 20,
            WaitTimeSeconds: 0
        };

        sqs.receiveMessage(params, function (err, data) {
            if (err) {
                console.log("Receive Error", err);
            } else if (data.Messages) {
                const State = JSON.parse(data.Messages[0].Body);
                let date = ("0" + date_ob.getDate()).slice(-2);
                let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
                let year = date_ob.getFullYear();
                let hours = date_ob.getHours();
                let minutes = date_ob.getMinutes();
                let seconds = date_ob.getSeconds();
                console.log(`Data Fetched from Queue at ${year}-${month}-${date} ${hours}:${minutes}:${seconds}`)
                var deleteParams = {
                    QueueUrl: queueURL,
                    ReceiptHandle: data.Messages[0].ReceiptHandle
                };
                sqs.deleteMessage(deleteParams, function (err, data) {
                    if (err) {
                        console.log("Delete Error", err);
                    } else {
                        console.log("Message Deleted", data);
                        res(State);
                    }
                });
            }
        });
    });
}

module.exports = {
    pollFromQueue,
    pushToQueue,
    queueURL
}