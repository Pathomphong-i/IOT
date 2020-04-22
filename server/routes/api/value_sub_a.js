const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        status: req.body.status,
        status_pump: req.body.status_pump,
        createdAt: new Date()
    });
    res.status(201).send();
})

router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})




async function loadPostsCollection(){
    let client;
    try{
        client = await mongodb.MongoClient.connect(
            'mongodb+srv://nut_hydro:XxVoVLrIokP8aHfW@namasaweecluster-cvee2.mongodb.net/test?retryWrites=true&w=majority',
            { useNewUrlParser: true }
        );
        return client.db('hydroponic_monitor').collection('sub_a');
        }catch(err){
            process.exit(1)
        }       
}

module.exports = router;