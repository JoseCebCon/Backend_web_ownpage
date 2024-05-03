const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareasModel')

const getTareas = asyncHandler(async (req, res) => {
    const tareas = await Tarea.find({ user: req.user.id })
    res.status(200).json({tareas})
})

const crearTareas = asyncHandler(async (req, res) => {
    if(!req.body.role){
        res.status(400)
        throw new Error('Please, fill your role')
    }

    const tarea = await Tarea.create({
        user: req.user.id,
        role: req.body.role,
    })
})

const updateTareas = asyncHandler(async(req, res) => {
    const tarea = await Tarea.findById(req.params.id)

    if(!tarea){
        res.status(400)
        throw new Error('Tarea not found')
    }

    const tareaUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(tareaUpdated)
})

const deleteTareas = asyncHandler(async(req, res) => {
    const tarea = await Tarea.findById(req.params.id)

    if(!tarea){
        res.status(400)
        throw new Error('Tarea not found')
    }

    await Tarea.deleteOne(tarea)

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getTareas,
    crearTareas,
    updateTareas,
    deleteTareas
}