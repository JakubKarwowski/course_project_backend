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
    image:{
        type: Image,
        required: false,
    },
});

const CollectionModel = mongoose.model('collectionlist', CollectionSchema);

module.exports = CollectionModel;