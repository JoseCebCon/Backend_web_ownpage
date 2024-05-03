const mongoose = require('mongoose');

const tareaSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    role: {
        type: String,
        required: [true, "Please, fill your role"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Tarea', tareaSchema)