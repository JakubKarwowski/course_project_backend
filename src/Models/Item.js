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
    collectionId:{
        type:String,
    },
    collectionName:{
        type:String,
    },
    author:{
        type:String,
    },
    customFields:[{
        type: CustomFieldsSchema,
        required: true,

    }]
},
{ timestamps: true });

const myDB = mongoose.connection.useDb('collectionlist')
const ItemsModel = myDB.model('items', ItemsSchema);

module.exports = ItemsModel;