// MongoDB
var mongo = require('mongodb')
var mongc = mongo.MongoClient
var url = 'mongodb://root:IOTraspberry@localhost:27017/test'

message = "HELLO MONGO TO JS"
mongc.connect(url, (error, client)=>{
    var myCol = client.db('admin').collection('test')
    myCol.insertOne({
        message: message
    }, ()=>{
        console.log('Data is saved to MongoDB')
        client.close()
    })
})