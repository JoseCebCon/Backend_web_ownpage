const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    lastname: {
        type: String,
        required: [true, "Please, fill your lastname"]
    },

    firstname: {
        type: String,
        required: [true, "Please, fill your firstname"]
    },

    email:{
        type: String,
        required: [true, "Please, fill your e-mail"],
        unique: true
    },

    phone:{
        type: Float64Array,
        required: [true, "Please, fill your number of phone"]
    },

    message:{
        type: String,
        required: [true, "Please, fill your message"],
        unique: true
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Request', requestSchema)