const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    
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
    },

    phone:{
        type: String,
        required: [true, "Please, fill your number of phone"]
    },

    message:{
        type: String,
        required: [true, "Please, fill your message"],
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Request', requestSchema)