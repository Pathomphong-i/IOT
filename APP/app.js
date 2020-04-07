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

app.use("/", (req, res) => {
    // res.sendFile("B:\\IOT2\\APP\\index.html");
    res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 30000;

app.listen(port, () => {
console.log("[success] task 1 : listening on port " + port);
});

