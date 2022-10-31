const mongoose = require('mongoose')

const CustomFieldsSchema = new mongoose.Schema({
    name:{type:String},
    type:{type:String},
    value:{type:String}
})

const ItemsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    tags:[
        String,
    ],
    customFields:[{
        type: CustomFieldsSchema,
        required: true,

    }]
},
{ timestamps: true });

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
    // dateOfCreation{
    //     type: Date,
    //     required: true,
    // },
    items:[
        {
            type:ItemsSchema,
            required:true,
        },
    ],
    
},
{ timestamps: true });

const myDB = mongoose.connection.useDb('collectionlist')
const CollectionModel = myDB.model('collections', CollectionSchema);

module.exports = CollectionModel;