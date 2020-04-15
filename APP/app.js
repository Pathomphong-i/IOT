var express = require("express");

var app = express();
app.use(express.json())
var url = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
var MongoClient = require('mongodb').MongoClient;

//1
app.get("/pi_led_status", function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IOT");        
        dbo.collection("pi_led_status").find({}).toArray(function(err, result) {
            var output = '<html><header><title>pi_led_status</title></header><body>';
            output += '<h1>pi_led_status</h1>';
            output += '<table border="1"><tr><td><b>' + 'Status' + '</b></td><td><b>' + 'Time' + '</b></td></tr>';
            // process todo list
            result.forEach(function(todo){
                output += '<tr><td>' + todo.status + '</td><td>' + todo.time + '</td></tr>';
            });
            // write HTML output (ending)
            output += '</table></body></html>'
            // send output back
            res.send(output);
            // log data to the console as well
            console.log(result);
            db.close();
        });
    });
});
//2
app.get("/pi_pump_water_loop_status", function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IOT");        
        dbo.collection("pi_pump_water_loop_status").find({}).toArray(function(err, result) {
            var output = '<html><header><title>pi_pump_water_loop_status</title></header><body>';
            output += '<h1>pi_pump_water_loop_status</h1>';
            output += '<table border="1"><tr><td><b>' + 'Status' + '</b></td><td><b>' + 'Time' + '</b></td></tr>';
            // process todo list
            result.forEach(function(todo){
                output += '<tr><td>' + todo.status + '</td><td>' + todo.time + '</td></tr>';
            });
            // write HTML output (ending)
            output += '</table></body></html>'
            // send output back
            res.send(output);
            // log data to the console as well
            console.log(result);
            db.close();
        });
    });
});
//3
app.get("/pi_pump_water_tank_status", function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IOT");        
        dbo.collection("pi_pump_water_tank_status").find({}).toArray(function(err, result) {
            var output = '<html><header><title>pi_pump_water_tank_status</title></header><body>';
            output += '<h1>pi_pump_water_tank_status</h1>';
            output += '<table border="1"><tr><td><b>' + 'Status' + '</b></td><td><b>' + 'Time' + '</b></td></tr>';
            // process todo list
            result.forEach(function(todo){
                output += '<tr><td>' + todo.status + '</td><td>' + todo.time + '</td></tr>';
            });
            // write HTML output (ending)
            output += '</table></body></html>'
            // send output back
            res.send(output);
            // log data to the console as well
            console.log(result);
            db.close();
        });
    });
});
//4
app.get("/pi_mix_water_status", function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IOT");        
        dbo.collection("pi_mix_water_status").find({}).toArray(function(err, result) {
            var output = '<html><header><title>pi_mix_water_status</title></header><body>';
            output += '<h1>pi_mix_water_status</h1>';
            output += '<table border="1"><tr><td><b>' + 'Status' + '</b></td><td><b>' + 'Time' + '</b></td></tr>';
            // process todo list
            result.forEach(function(todo){
                output += '<tr><td>' + todo.status + '</td><td>' + todo.time + '</td></tr>';
            });
            // write HTML output (ending)
            output += '</table></body></html>'
            // send output back
            res.send(output);
            // log data to the console as well
            console.log(result);
            db.close();
        });
    });
});
//5
app.get("/pi_valve_A_status", function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IOT");        
        dbo.collection("pi_valve_A_status").find({}).toArray(function(err, result) {
            var output = '<html><header><title>pi_valve_A_status</title></header><body>';
            output += '<h1>pi_valve_A_status</h1>';
            output += '<table border="1"><tr><td><b>' + 'Status' + '</b></td><td><b>' + 'Time' + '</b></td></tr>';
            // process todo list
            result.forEach(function(todo){
                output += '<tr><td>' + todo.status + '</td><td>' + todo.time + '</td></tr>';
            });
            // write HTML output (ending)
            output += '</table></body></html>'
            // send output back
            res.send(output);
            // log data to the console as well
            console.log(result);
            db.close();
        });
    });
});
//6
app.get("/pi_valve_B_status", function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IOT");        
        dbo.collection("pi_valve_B_status").find({}).toArray(function(err, result) {
            var output = '<html><header><title>pi_valve_B_status</title></header><body>';
            output += '<h1>pi_valve_B_status</h1>';
            output += '<table border="1"><tr><td><b>' + 'Status' + '</b></td><td><b>' + 'Time' + '</b></td></tr>';
            // process todo list
            result.forEach(function(todo){
                output += '<tr><td>' + todo.status + '</td><td>' + todo.time + '</td></tr>';
            });
            // write HTML output (ending)
            output += '</table></body></html>'
            // send output back
            res.send(output);
            // log data to the console as well
            console.log(result);
            db.close();
        });
    });
});
//7
app.get("/pi_valve_Acid_status", function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IOT");        
        dbo.collection("pi_valve_Acid_status").find({}).toArray(function(err, result) {
            var output = '<html><header><title>pi_valve_Acid_status</title></header><body>';
            output += '<h1>pi_valve_Acid_status</h1>';
            output += '<table border="1"><tr><td><b>' + 'Status' + '</b></td><td><b>' + 'Time' + '</b></td></tr>';
            // process todo list
            result.forEach(function(todo){
                output += '<tr><td>' + todo.status + '</td><td>' + todo.time + '</td></tr>';
            });
            // write HTML output (ending)
            output += '</table></body></html>'
            // send output back
            res.send(output);
            // log data to the console as well
            console.log(result);
            db.close();
        });
    });
});
//8
app.get("/pi_ec_sensor_status", function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IOT");        
        dbo.collection("pi_ec_sensor_status").find({}).toArray(function(err, result) {
            var output = '<html><header><title>pi_ec_sensor_status</title></header><body>';
            output += '<h1>pi_ec_sensor_status</h1>';
            output += '<table border="1"><tr><td><b>' + 'Status' + '</b></td><td><b>' + 'Time' + '</b></td></tr>';
            // process todo list
            result.forEach(function(todo){
                output += '<tr><td>' + todo.status + '</td><td>' + todo.time + '</td></tr>';
            });
            // write HTML output (ending)
            output += '</table></body></html>'
            // send output back
            res.send(output);
            // log data to the console as well
            console.log(result);
            db.close();
        });
    });
});
//9
app.get("/pi_ph_sensor_status", function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IOT");        
        dbo.collection("pi_ph_sensor_status").find({}).toArray(function(err, result) {
            var output = '<html><header><title>pi_ph_sensor_status</title></header><body>';
            output += '<h1>pi_ph_sensor_status</h1>';
            output += '<table border="1"><tr><td><b>' + 'Status' + '</b></td><td><b>' + 'Time' + '</b></td></tr>';
            // process todo list
            result.forEach(function(todo){
                output += '<tr><td>' + todo.status + '</td><td>' + todo.time + '</td></tr>';
            });
            // write HTML output (ending)
            output += '</table></body></html>'
            // send output back
            res.send(output);
            // log data to the console as well
            console.log(result);
            db.close();
        });
    });
});
//10
app.get("/mqtt_pump_water_loop_status", function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IOT");        
        dbo.collection("mqtt_pump_water_loop_status").find({}).toArray(function(err, result) {
            var output = '<html><header><title>mqtt_pump_water_loop_status</title></header><body>';
            output += '<h1>mqtt_pump_water_loop_status</h1>';
            output += '<table border="1"><tr><td><b>' + 'Status' + '</b></td><td><b>' + 'Time' + '</b></td></tr>';
            // process todo list
            result.forEach(function(todo){
                output += '<tr><td>' + todo.status + '</td><td>' + todo.time + '</td></tr>';
            });
            // write HTML output (ending)
            output += '</table></body></html>'
            // send output back
            res.send(output);
            // log data to the console as well
            console.log(result);
            db.close();
        });
    });
});
//11
app.get("/mqtt_pump_water_tank_status", function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IOT");        
        dbo.collection("mqtt_pump_water_tank_status").find({}).toArray(function(err, result) {
            var output = '<html><header><title>mqtt_pump_water_tank_status</title></header><body>';
            output += '<h1>mqtt_pump_water_tank_status</h1>';
            output += '<table border="1"><tr><td><b>' + 'Status' + '</b></td><td><b>' + 'Time' + '</b></td></tr>';
            // process todo list
            result.forEach(function(todo){
                output += '<tr><td>' + todo.status + '</td><td>' + todo.time + '</td></tr>';
            });
            // write HTML output (ending)
            output += '</table></body></html>'
            // send output back
            res.send(output);
            // log data to the console as well
            console.log(result);
            db.close();
        });
    });
});
//12
app.get("/mqtt_mix_water_status", function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IOT");        
        dbo.collection("mqtt_mix_water_status").find({}).toArray(function(err, result) {
            var output = '<html><header><title>mqtt_mix_water_status</title></header><body>';
            output += '<h1>mqtt_mix_water_status</h1>';
            output += '<table border="1"><tr><td><b>' + 'Status' + '</b></td><td><b>' + 'Time' + '</b></td></tr>';
            // process todo list
            result.forEach(function(todo){
                output += '<tr><td>' + todo.status + '</td><td>' + todo.time + '</td></tr>';
            });
            // write HTML output (ending)
            output += '</table></body></html>'
            // send output back
            res.send(output);
            // log data to the console as well
            console.log(result);
            db.close();
        });
    });
});
//13
app.get("/mqtt_valve_A_status", function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IOT");        
        dbo.collection("mqtt_valve_A_status").find({}).toArray(function(err, result) {
            var output = '<html><header><title>mqtt_valve_A_status</title></header><body>';
            output += '<h1>mqtt_valve_A_status</h1>';
            output += '<table border="1"><tr><td><b>' + 'Status' + '</b></td><td><b>' + 'Time' + '</b></td></tr>';
            // process todo list
            result.forEach(function(todo){
                output += '<tr><td>' + todo.status + '</td><td>' + todo.time + '</td></tr>';
            });
            // write HTML output (ending)
            output += '</table></body></html>'
            // send output back
            res.send(output);
            // log data to the console as well
            console.log(result);
            db.close();
        });
    });
});
//14
app.get("/mqtt_valve_B_status", function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IOT");        
        dbo.collection("mqtt_valve_B_status").find({}).toArray(function(err, result) {
            var output = '<html><header><title>mqtt_valve_B_status</title></header><body>';
            output += '<h1>mqtt_valve_B_status</h1>';
            output += '<table border="1"><tr><td><b>' + 'Status' + '</b></td><td><b>' + 'Time' + '</b></td></tr>';
            // process todo list
            result.forEach(function(todo){
                output += '<tr><td>' + todo.status + '</td><td>' + todo.time + '</td></tr>';
            });
            // write HTML output (ending)
            output += '</table></body></html>'
            // send output back
            res.send(output);
            // log data to the console as well
            console.log(result);
            db.close();
        });
    });
});
//15
app.get("/mqtt_switch_status", function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IOT");        
        dbo.collection("mqtt_switch_status").find({}).toArray(function(err, result) {
            var output = '<html><header><title>mqtt_switch_status</title></header><body>';
            output += '<h1>mqtt_switch_status</h1>';
            output += '<table border="1"><tr><td><b>' + 'Status' + '</b></td><td><b>' + 'Time' + '</b></td></tr>';
            // process todo list
            result.forEach(function(todo){
                output += '<tr><td>' + todo.status + '</td><td>' + todo.time + '</td></tr>';
            });
            // write HTML output (ending)
            output += '</table></body></html>'
            // send output back
            res.send(output);
            // log data to the console as well
            console.log(result);
            db.close();
        });
    });
});
//16
app.get("/mqtt_pump_water_loop_status", function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IOT");        
        dbo.collection("mqtt_pump_water_loop_status").find({}).toArray(function(err, result) {
            var output = '<html><header><title>mqtt_pump_water_loop_status</title></header><body>';
            output += '<h1>mqtt_pump_water_loop_status</h1>';
            output += '<table border="1"><tr><td><b>' + 'Status' + '</b></td><td><b>' + 'Time' + '</b></td></tr>';
            // process todo list
            result.forEach(function(todo){
                output += '<tr><td>' + todo.status + '</td><td>' + todo.time + '</td></tr>';
            });
            // write HTML output (ending)
            output += '</table></body></html>'
            // send output back
            res.send(output);
            // log data to the console as well
            console.log(result);
            db.close();
        });
    });
});


// app.use("/", (req, res) => {
//     // res.sendFile("B:\\IOT2\\APP\\index.html");
//     res.sendFile(__dirname + '/index.html');
// });

app.get("/", function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("IOT"); 

        var pi_ec_sensor_status = "";
        var pi_ph_sensor_status = "";
        var pi_valve_A_status ="";
        var pi_valve_B_status="";
        var pi_valve_Acid_status="";
        var pi_mix_water_status="";
        var pi_pump_water_loop_status="";
        var pi_pump_water_tank_status="";
        var pi_led_status="";
        //1       
        dbo.collection("pi_ec_sensor_status").find({}).toArray(function(err, result) {
            result.forEach(function(todo){
                pi_ec_sensor_status = todo.status;
            });
            db.close();
        });
        //2
        dbo.collection("pi_ph_sensor_status").find({}).toArray(function(err, result) {
            result.forEach(function(todo){
                pi_ph_sensor_status = todo.status;
            });
            db.close();
        });
        //3
        dbo.collection("pi_valve_A_status").find({}).toArray(function(err, result) {
            result.forEach(function(todo){
                pi_valve_A_status = todo.status;
            });
            db.close();
        });
        //4
        dbo.collection("pi_valve_B_status").find({}).toArray(function(err, result) {
            result.forEach(function(todo){
                pi_valve_B_status = todo.status;
            });
            db.close();
        });
        //5
        dbo.collection("pi_valve_Acid_status").find({}).toArray(function(err, result) {
            result.forEach(function(todo){
                pi_valve_Acid_status = todo.status;
            });
            db.close();
        });
        //6
        dbo.collection("pi_mix_water_status").find({}).toArray(function(err, result) {
            result.forEach(function(todo){
                pi_mix_water_status = todo.status;
            });
            db.close();
        });
        
        //7
        dbo.collection("pi_pump_water_loop_status").find({}).toArray(function(err, result) {
            result.forEach(function(todo){
                pi_pump_water_loop_status = todo.status;
            });
            db.close();
        });
        //8
        dbo.collection("pi_pump_water_tank_status").find({}).toArray(function(err, result) {
            result.forEach(function(todo){
                pi_pump_water_tank_status = todo.status;
            });
            db.close();
        });
        //9
        dbo.collection("pi_led_status").find({}).toArray(function(err, result) {
            result.forEach(function(todo){
                pi_led_status = todo.status;
            });
            db.close();
            
            
            //mix html
            //ec ph a b acid mix loop tank led
            var output = '';
            var a = '<!DOCTYPE html><html><head><h1 style="text-align: center;">IOT</h1></head><body><table style="height: 298px; width: 483px; border-color: #ff5733; margin-left: auto; margin-right: auto;" border="5"><tbody><tr><td style="width: 84px;"><strong>Pi status</strong></td><td style="width: 139.5px; text-align: center;"><strong>value</strong></td><td style="width: 40.5px;"><strong>log</strong></td><td style="width: 283px; text-align: left;"><strong>control by publish to clound mqtt</strong></td></tr><tr><td style="width: 84px;">Ec</td><td style="width: 139.5px; text-align: center;">';
            var b = '</td><td style="width: 40.5px;"><a href="http://localhost:30000/pi_ec_sensor_status" target="_blank" rel="noopener">log</a></td><td style="width: 283px;">&nbsp;</td></tr><tr><td style="width: 84px;">Ph</td><td style="width: 139.5px; text-align: center;">';
            var c = '</td><td style="width: 40.5px;"><a href="http://localhost:30000/pi_ph_sensor_status" target="_blank" rel="noopener">log</a></td><td style="width: 283px;">&nbsp;</td></tr><tr><td style="width: 84px;">Valve A</td><td style="width: 139.5px; text-align: center;">';
            var d = '</td><td style="width: 40.5px;"><a href="http://localhost:30000/pi_valve_A_status" target="_blank" rel="noopener">log</a></td><td style="width: 283px;">&nbsp;<a href="http://localhost:30000/a/on" target="_blank" rel="noopener">on</a>   <a href="http://localhost:30000/a/off" target="_blank" rel="noopener">off</a></td></tr><tr><td style="width: 84px;">Valve B</td><td style="width: 139.5px; text-align: center;">';
            var e = '</td><td style="width: 40.5px;"><a href="http://localhost:30000/pi_valve_B_status" target="_blank" rel="noopener">log</a></td><td style="width: 283px;">&nbsp;<a href="http://localhost:30000/b/on" target="_blank" rel="noopener">on</a>   <a href="http://localhost:30000/b/off" target="_blank" rel="noopener">off</a></td></tr><tr><td style="width: 84px;">valve Acid</td><td style="width: 139.5px; text-align: center;">';
            var f = '</td><td style="width: 40.5px;"><a href="http://localhost:30000/pi_valve_Acid_status" target="_blank" rel="noopener">log</a></td><td style="width: 283px;">&nbsp;<a href="http://localhost:30000/acid/on" target="_blank" rel="noopener">on</a>   <a href="http://localhost:30000/acid/off" target="_blank" rel="noopener">off</a></td></tr><tr><td style="width: 84px;">mix water</td><td style="width: 139.5px; text-align: center;">';
            var g = '</td><td style="width: 40.5px;"><a href="http://localhost:30000/pi_mix_water_status" target="_blank" rel="noopener">log</a></td><td style="width: 283px;">&nbsp;<a href="http://localhost:30000/mix/on" target="_blank" rel="noopener">on</a>   <a href="http://localhost:30000/mix/off" target="_blank" rel="noopener">off</a></td></tr><tr><td style="width: 84px;">pump loop</td><td style="width: 139.5px; text-align: center;">';
            var h = '</td><td style="width: 40.5px;"><a href="http://localhost:30000/pi_pump_water_loop_status" target="_blank" rel="noopener">log</a></td><td style="width: 283px;">&nbsp;<a href="http://localhost:30000/loop/on" target="_blank" rel="noopener">on</a>   <a href="http://localhost:30000/loop/off" target="_blank" rel="noopener">off</a></td></tr><tr><td style="width: 84px;">pump tank</td><td style="width: 139.5px; text-align: center;">';
            var i = '</td><td style="width: 40.5px;"><a href="http://localhost:30000/pi_pump_water_tank_status" target="_blank" rel="noopener">log</a></td><td style="width: 283px;">&nbsp;<a href="http://localhost:30000/tank/on" target="_blank" rel="noopener">on</a>   <a href="http://localhost:30000/tank/off" target="_blank" rel="noopener">off</a></td></tr><tr><td style="width: 84px;">LED</td><td style="width: 139.5px; text-align: center;">';
            var j = '</td><td style="width: 40.5px;"><a href="http://localhost:30000/pi_led_status" target="_blank" rel="noopener">log</a></td><td style="width: 283px;">&nbsp;<a href="http://localhost:30000/led/on" target="_blank" rel="noopener">on</a>   <a href="http://localhost:30000/led/off" target="_blank" rel="noopener">off</a></td></tr><tr></td></tr></tbody></table><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;&nbsp;</p></body></html>';
            
            output += a + pi_ec_sensor_status + b + pi_ph_sensor_status + c + pi_valve_A_status + d + pi_valve_B_status + e + pi_valve_Acid_status + f + pi_mix_water_status + g + pi_pump_water_loop_status + h + pi_pump_water_tank_status + i + pi_led_status + j;
            
            res.send(output)

            //res.sendFile(__dirname + '/index.html');
        });
        db.close();
        

        
    });
});



//MQTT publish
var mqtt = require('mqtt');

const MQTT_SERVER = "hairdresser.cloudmqtt.com";
const MQTT_PORT = "15847";
//if your server don't have username and password let blank.
const MQTT_USER = "uwzbsztw"; 
const MQTT_PASSWORD = "Vv2syCm0pNyU";

var url = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
//mongodb://root:IOTraspberry@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false
//mongodb+srv://root:IOTraspberry@cluster0-x9jen.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
//
var MongoClient = require('mongodb').MongoClient;



// Connect MQTT
var client = mqtt.connect({
    host: MQTT_SERVER,
    port: MQTT_PORT,
    username: MQTT_USER,
    password: MQTT_PASSWORD
});
app.get("/a/on", function(req, res, next) {
    client.publish("mqtt_valve_A_status","ON");
    console.log("a on");
});
app.get("/a/off", function(req, res, next) {
    client.publish("mqtt_valve_A_status","OFF");
    console.log("a off");
});

app.get("/b/on", function(req, res, next) {
    client.publish("mqtt_valve_B_status","ON");
    console.log("b on");
});
app.get("/b/off", function(req, res, next) {
    client.publish("mqtt_valve_B_status","OFF");
    console.log("b off");
});

app.get("/acid/on", function(req, res, next) {
    client.publish("mqtt_valve_Acid_status","ON");
    console.log("acid on");
});
app.get("/acid/off", function(req, res, next) {
    client.publish("mqtt_valve_Acid_status","OFF");
    console.log("acid off");
});

app.get("/mix/on", function(req, res, next) {
    client.publish("mqtt_mix_water_status","ON");
    console.log("mix on");
});
app.get("/mix/off", function(req, res, next) {
    client.publish("mqtt_mix_water_status","OFF");
    console.log("mix off");
});

app.get("/loop/on", function(req, res, next) {
    client.publish("mqtt_pump_water_loop_status","ON");
    console.log("loop on");
});
app.get("/loop/off", function(req, res, next) {
    client.publish("mqtt_pump_water_loop_status","OFF");
    console.log("loop off");
});

app.get("/tank/on", function(req, res, next) {
    client.publish("mqtt_pump_water_tank_status","ON");
    console.log("tank on");
});
app.get("/tank/off", function(req, res, next) {
    client.publish("mqtt_pump_water_tank_status","OFF");
    console.log("tank off");
});

app.get("/led/on", function(req, res, next) {
    client.publish("mqtt_switch_status","ON");
    console.log("led on");
});
app.get("/led/off", function(req, res, next) {
    client.publish("mqtt_switch_status","OFF");
    console.log("led off");
});



var port = process.env.PORT || 30000;

app.listen(port, () => {
console.log("[success] task 1 : listening on port " + port);
});

