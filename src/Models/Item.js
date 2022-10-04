const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    tags:{
        type: Array,
        required: true,
    },
});

const ItemModel = mongoose.model('users', ItemSchema);

module.exports = ItemModel;