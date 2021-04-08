// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
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


function pushToQueue(queueURL, messageJSON){
    var params = {  
        MessageBody: JSON.stringify(messageJSON),
        QueueUrl: queueURL
      };

      sqs.sendMessage(params, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data.MessageId);
        }
      });
}

function pollFromQueue(queueURL) {
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

       sqs.receiveMessage(params, function(err, data) {
        if (err) {
          console.log("Receive Error", err);
        } else if (data.Messages) {
          console.log(JSON.parse(data.Messages[0].Body));
          var deleteParams = {
            QueueUrl: queueURL,
            ReceiptHandle: data.Messages[0].ReceiptHandle
          };
          sqs.deleteMessage(deleteParams, function(err, data) {
            if (err) {
              console.log("Delete Error", err);
            } else {
              console.log("Message Deleted", data);
            }
          });
        }
      });
}

pushToQueue(queueURL, mockObject);
setTimeout(pollFromQueue, 3000, queueURL);