var express = require("express");

var mqtt = require('mqtt');

const MQTT_SERVER = "hairdresser.cloudmqtt.com";
const MQTT_PORT = "15851";
//if your server don't have username and password let blank.
const MQTT_USER = "mgfehiyl"; 
const MQTT_PASSWORD = "GuAsoAf9iA2G";

var client = mqtt.connect({
    host: MQTT_SERVER,
    port: MQTT_PORT,
    username: MQTT_USER,
    password: MQTT_PASSWORD
});



var app = express();
app.use(express.json())
var url = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
var nameSchema = new mongoose.Schema({
    status: String,
    time: String,
    topic: String
  }
);

var User = mongoose.model("User", nameSchema);

app.post("/post", (req, res) => {
    var myData = new User(req.body);
    client.publish(myData.topic, myData.status);
    res.send(myData.topic + ":" + myData.status);   
  });

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

app.use("/", (req, res) => {
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
        var output="";
        //1       
        dbo.collection("pi_ec_sensor_status").find({}).toArray(function(err, result) {
            result.forEach(function(todo){
                pi_ec_sensor_status = todo.status;
            });
        });
        //2
        dbo.collection("pi_ph_sensor_status").find({}).toArray(function(err, result) {
            result.forEach(function(todo){
                pi_ph_sensor_status = todo.status;
            });
            
        });
        //3
        dbo.collection("pi_valve_A_status").find({}).toArray(function(err, result) {
            result.forEach(function(todo){
                pi_valve_A_status = todo.status;
            });
            
        });
        //4
        dbo.collection("pi_valve_B_status").find({}).toArray(function(err, result) {
            result.forEach(function(todo){
                pi_valve_B_status = todo.status;
            });
            
        });
        //5
        dbo.collection("pi_valve_Acid_status").find({}).toArray(function(err, result) {
            result.forEach(function(todo){
                pi_valve_Acid_status = todo.status;
            });
            
        });
        //6
        dbo.collection("pi_mix_water_status").find({}).toArray(function(err, result) {
            result.forEach(function(todo){
                pi_mix_water_status = todo.status;
            });
            
        });
        //7
        dbo.collection("pi_pump_water_loop_status").find({}).toArray(function(err, result) {
            result.forEach(function(todo){
                pi_pump_water_loop_status = todo.status;
            });
            
        });
        //8
        dbo.collection("pi_pump_water_tank_status").find({}).toArray(function(err, result) {
            result.forEach(function(todo){
                pi_pump_water_tank_status = todo.status;
            });
            
        });
        //9
        dbo.collection("pi_led_status").find({}).toArray(function(err, result) {
            result.forEach(function(todo){
                pi_led_status = todo.status;
            });
            //mix html
            //ec ph a b acid mix loop tank led
            var output = '';
            var a = '<!DOCTYPE html><html><head><h1 style="text-align: center;">IOT</h1></head><body><table style="height: 298px; width: 483px; border-color: #ff5733; margin-left: auto; margin-right: auto;" border="5"><tbody><tr><td style="width: 84px;"><strong>Pi status</strong></td><td style="width: 139.5px; text-align: center;"><strong>value</strong></td><td style="width: 40.5px;"><strong>log</strong></td><td style="width: 283px; text-align: left;"><strong>control by publish to clound mqtt</strong></td></tr><tr><td style="width: 84px;">Ec</td><td style="width: 139.5px; text-align: center;">';
            var b = '</td><td style="width: 40.5px;"><a href="http://localhost:30000/pi_ec_sensor_status" target="_blank" rel="noopener">log</a></td><td style="width: 283px;">&nbsp;</td></tr><tr><td style="width: 84px;">Ph</td><td style="width: 139.5px; text-align: center;">';
            var c = '</td><td style="width: 40.5px;"><a href="http://localhost:30000/pi_ph_sensor_status" target="_blank" rel="noopener">log</a></td><td style="width: 283px;">&nbsp;</td></tr><tr><td style="width: 84px;">Valve A</td><td style="width: 139.5px; text-align: center;">';
            var d = '</td><td style="width: 40.5px;"><a href="http://localhost:30000/pi_valve_A_status" target="_blank" rel="noopener">log</a></td><td style="width: 283px;"><form method="post" action="/post"><input type="hidden" name="topic" value="mqtt_valve_A_status" /><input name="status" type="submit" value="ON"><input name="status" type="submit" value="OFF"></form></form></td></tr><tr></tr><td style="width: 84px;">Valve B</td><td style="width: 139.5px; text-align: center;">';
            var e = '</td><td style="width: 40.5px;"><a href="http://localhost:30000/pi_valve_B_status" target="_blank" rel="noopener">log</a></td><td style="width: 283px;"><form method="post" action="/post"><form method="post" action="/post"><input type="hidden" name="topic" value="mqtt_valve_B_status" /><input name="status" type="submit" value="ON"><input name="status" type="submit" value="OFF"></form></td></tr><tr><td style="width: 84px;">valve Acid</td><td style="width: 139.5px; text-align: center;">';
            var f = '</td><td style="width: 40.5px;"><a href="http://localhost:30000/pi_valve_Acid_status" target="_blank" rel="noopener">log</a></td><td style="width: 283px;"><form method="post" action="/post"><input type="hidden" name="topic" value="mqtt_valve_Acid_status" /><input name="status" type="submit" value="ON"><input name="status" type="submit" value="OFF"></form></td></tr><tr><td style="width: 84px;">mix water</td><td style="width: 139.5px; text-align: center;">';
            var g = '</td><td style="width: 40.5px;"><a href="http://localhost:30000/pi_mix_water_status" target="_blank" rel="noopener">log</a></td><td style="width: 283px;"><form method="post" action="/post"><input type="hidden" name="topic" value="mqtt_mix_water_status" /><input name="status" type="submit" value="ON"><input name="status" type="submit" value="OFF"></form></td></tr><tr><td style="width: 84px;">pump loop</td><td style="width: 139.5px; text-align: center;">';
            var h = '</td><td style="width: 40.5px;"><a href="http://localhost:30000/pi_pump_water_loop_status" target="_blank" rel="noopener">log</a></td><td style="width: 283px;"><form method="post" action="/post"><input type="hidden" name="topic" value="mqtt_pump_water_loop_status" /><input name="status" type="submit" value="ON"><input name="status" type="submit" value="OFF"></form></td></tr><tr><td style="width: 84px;">pump tank</td><td style="width: 139.5px; text-align: center;">';
            var i = '</td><td style="width: 40.5px;"><a href="http://localhost:30000/pi_pump_water_tank_status" target="_blank" rel="noopener">log</a></td><td style="width: 283px;"><form method="post" action="/post"><input type="hidden" name="topic" value="mqtt_pump_water_tank_status" /><input name="status" type="submit" value="ON"><input name="status" type="submit" value="OFF"></form></td></tr><tr><td style="width: 84px;">LED</td><td style="width: 139.5px; text-align: center;">';
            var j = '</td><td style="width: 40.5px;"><a href="http://localhost:30000/pi_led_status" target="_blank" rel="noopener">log</a></td><td style="width: 283px;"><form method="post" action="/post"><input type="hidden" name="topic" value="mqtt_led_status" /><input name="status" type="submit" value="ON"><input name="status" type="submit" value="OFF"></form></form></td></tr></tbody></table><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;&nbsp;</p></body></html>';
            
            //var z = '<form method="post" action="/post"><input type="hidden" name="topic" value="pi_mix_water_status" /><input name="status" type="submit" value="ON"><input name="status" type="submit" value="OFF"></form>'
            output += a + pi_ec_sensor_status + b + pi_ph_sensor_status + c + pi_valve_A_status + d + pi_valve_B_status + e + pi_valve_Acid_status + f + pi_mix_water_status + g + pi_pump_water_loop_status + h + pi_pump_water_tank_status + i + pi_led_status + j;
            res.send(output)

            //res.sendFile(__dirname + '/index.html');
        });
        db.close();
        
    });
});

var port = process.env.PORT || 30000;

app.listen(port, () => {
console.log("[success] task 1 : listening on port " + port);
});

