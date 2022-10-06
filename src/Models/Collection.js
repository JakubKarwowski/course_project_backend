const mongoose = require('mongoose')

const CollectionSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    topic:{
        type: String,
        required: true,
    },
    owner:{
        type: String,
        required: true,
    },
    items:[
        {
            name:{
                type: String,
                required: true,
            },
            tags:[
                String,
            ],
        },
    ]
});

const myDB = mongoose.connection.useDb('collectionlist')
const CollectionModel = myDB.model('collections', CollectionSchema);

module.exports = CollectionModel;