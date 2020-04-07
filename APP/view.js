const server = require('express');
const PORT = process.env.PORT || 7000;
const request = require('request');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';

const dbName = "admin";
let db;
var dataSource = [];

MongoClient.connect(url, {useNewUrlParser: true,useUnifiedTopology: true},
	(err, client)=>{
		if (err) throw err;
		db = client.db(dbName);
        console.log(`Connected MongoDB: ${url}`);
        console.log(`Database: ${dbName}`);
		db.collection('test').find({}).toArray(function(error, result){
			for(var i=0;i<result.length;i++){
				var data = {
					payload : result[i].payload
				}
				dataSource.push(data);
			}
		});
	}
);

server()
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true}))
.get('/', (req, res) => {
	var str = '';
	str += '<html>';
	str += '<head><center><h1>'+` IOT `+'</h1></center></head>';
	str += '<body><center><table border="1" cellspacing="5" cellpadding="10" style="border-color:black; background-color:white; width:50%;">';
	str += '<tr><td>No.<td>สถานะ</td></tr>';
	for(var i = 0;i < dataSource.length;i++){
		str += '<tr><td>'+(i+1)+'</td><td>'+dataSource[i].payload+'</td></tr>';
	}
	str += '</table></center></body>';
	str += '</html>';
	res.send(str)
})
.post('/iot', function (req, res) {
	var data = {
		payload : req.body.payload,
	};
	dataSource.push(data);

	res.json({
		status: 200,
        message: `Webhook is working!`
    });
})
.listen(PORT, () => console.log(`Listening on ${ PORT }`));
