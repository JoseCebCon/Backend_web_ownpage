const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please, fill your name"]
    },

    lastname: {
        type: String,
        required: [true, "Please, fill your lastname"]
    },

    email:{
        type: String,
        required: [true, "Please, fill your e-mail"],
        unique: true
    },

    password:{
        type: String,
        required: [true, "Please, fill your password"]
    },

    esAdmin: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)