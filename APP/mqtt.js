//MQTT
var mqtt = require('mqtt');

const MQTT_SERVER = "hairdresser.cloudmqtt.com";
const MQTT_PORT = "15847";
//if your server don't have username and password let blank.
const MQTT_USER = "uwzbsztw"; 
const MQTT_PASSWORD = "Vv2syCm0pNyU";

var url = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
var MongoClient = require('mongodb').MongoClient;


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
    client.subscribe(['pi_led_status','pi_pump_water_loop_status','pi_pump_water_tank_status',
    'pi_mix_water_status','pi_valve_A_status','pi_valve_B_status','pi_valve_Acid_status',
    'pi_ec_sensor_status','pi_ph_sensor_status','mqtt_pump_water_loop_status','mqtt_pump_water_tank_status',
    'mqtt_mix_water_status','mqtt_valve_A_status','mqtt_valve_B_status','mqtt_valve_Acid_status',
    'mqtt_switch_status'], function (err) {
        if (err) {
            console.log(err);
        }
    });
});

// Receive Message and print on terminal
client.on('message', function (topic, message) {
    
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IOT");
        var myobj = {status: message.toString(), time: hours + ":" + minutes + ":" + seconds + " " +year + "-" + month + "-" + date};
        dbo.collection(topic).insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
    console.log(topic,message.toString());
});

client.publish("test","GGGGGG");
// setInterval(() => {
//     client.publish("test", "hello from NodeJS");
// }, 5000);

// mqtt_pump_water_loop_status','mqtt_pump_water_tank_status',
// 'mqtt_mix_water_status','mqtt_valve_A_status','mqtt_valve_B_status','mqtt_valve_Acid_status',
// 'mqtt_switch_status