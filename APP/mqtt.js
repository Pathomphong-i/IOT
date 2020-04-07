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
    // message is Buffer
    console.log(topic,message.toString());
});

client.publish("test","GGGGGG");
// setInterval(() => {
//     client.publish("test", "hello from NodeJS");
// }, 5000);

// mqtt_pump_water_loop_status','mqtt_pump_water_tank_status',
// 'mqtt_mix_water_status','mqtt_valve_A_status','mqtt_valve_B_status','mqtt_valve_Acid_status',
// 'mqtt_switch_status