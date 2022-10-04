const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    admin:{
        type: Boolean,
        default: false,
    },
    blocked:{
        type: Boolean,
        default: false,
    },
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;