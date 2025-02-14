const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required:true
    },
    DOB: {
        type: Date,
        required:true,
    },
    country: {
        type: String,
        required:true
    }

})

const User = mongoose.model('User', userSchema);
module.exports = User;