const asyncHandler = require('express-async-handler')
const Request = require('../models/requestModel')

const getRequest = asyncHandler(async (req, res) => {
    const requests = await Request.find({user: req.lastname})
    res.status(200).json({requests})
})

const crearRequest = asyncHandler(async (req, res) => {
    if(!req.body.lastname){
        res.status(400)
        throw new Error('Please, fill your lastname')
    }

    if(!req.body.firstname){
        res.status(400)
        throw new Error('Please, fill your firstname')
    }

    if(!req.body.email){
        res.status(400)
        throw new Error('Please, fill your e-mail')
    }

    if(!req.body.phone){
        res.status(400)
        throw new Error('Please, fill your number of your phone')
    }

    if(!req.body.message){
        res.status(400)
        throw new Error('Please, fill your message')
    }

    const request = await Request.create({
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    })

    res.status(200).json(request)
})


module.exports = {
    getRequest,
    crearRequest,
}