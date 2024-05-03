const asyncHandler = require('express-async-handler')
const Request = require('../models/requestModel')

const getRequest = asyncHandler(async (req, res) => {
    const request = await Request.find({user: req.user.id})
    res.status(200).json({request})
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
        throw new Error('Please, fill your number of phone')
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

    res.status(201).json(request)
})

const updateRequest = asyncHandler(async (req, res) => {
    const request = await Request.findById(req.params.id)

    if(!request){
        res.status(400)
        throw new Error('Request not found')
    }

    const requestUpdated = await Request.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(requestUpdated)
})

const deleteRequest = asyncHandler(async (req, res) => {
    const request = await Request.findById(req.params.id)

    if(!request){
        res.status(400)
        throw new Error('Request not found')
    }

    await Request.deleteOne(request)

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getRequest,
    crearRequest,
    updateRequest,
    deleteRequest
}