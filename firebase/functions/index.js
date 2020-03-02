const functions = require('firebase-functions');

require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const _ = require('lodash');


// Create a MQTT Client
const mqtt = require('mqtt');
// Firebase init
const admin = require("firebase-admin");
// Fetch the service account key JSON file contents
let serviceAccount = require("./config/serviceAccountKey.json");
// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://iot3-35f08.firebaseio.com"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
const db = admin.database();
const ref = db.ref("A");

// Create a client connection to CloudMQTT for live data
const client = mqtt.connect('mqtt://hairdresser.cloudmqtt.com', {
  username: 'uwzbsztw',
  password: 'Vv2syCm0pNyU',
  port: 15847
});

client.on('connect', function() { 
  // When connected
  console.log("Connected to CloudMQTT");
  // Subscribe to the temperature
  client.subscribe('mqtt_valve_A_status', function() {
    client.on('message', function(topic, message, packet) {
        if (topic === 'mqtt_valve_A_status') {
            let now = new Date().valueOf();
            let usersRef = db.ref("A").child(now);
            usersRef.set({
                topic: topic,
                temp:  parseFloat(message),
                createAt: new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Bangkok'
                }),
                timestamp: now
            });
        }

        console.log("Received '" + message + "' on '" + topic + "'");
    });
  });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))