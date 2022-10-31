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
},
{ timestamps: true });

CollectionSchema.index({'$**' : 'text'});

const myDB = mongoose.connection.useDb('collectionlist')
const CollectionModel = myDB.model('collections', CollectionSchema);

module.exports = CollectionModel;
