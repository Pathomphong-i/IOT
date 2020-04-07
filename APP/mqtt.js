//MQTT
var mqtt = require('mqtt');

const MQTT_SERVER = "hairdresser.cloudmqtt.com";
const MQTT_PORT = "15847";
//if your server don't have username and password let blank.
const MQTT_USER = "uwzbsztw"; 
const MQTT_PASSWORD = "Vv2syCm0pNyU";

// Connect MQTT
var client = mqtt.connect({
    host: MQTT_SERVER,
    port: MQTT_PORT,
    username: MQTT_USER,
    password: MQTT_PASSWORD
});

client.on('connect', function () {
    // Subscribe any topic
    console.log("MQTT Connect");
    client.subscribe(['test','topic2'], function (err) {
        if (err) {
            console.log(err);
        }
    });
});

// Receive Message and print on terminal
client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
});

client.publish("test","GGGGGG");
// setInterval(() => {
//     client.publish("test", "hello from NodeJS");
// }, 5000);