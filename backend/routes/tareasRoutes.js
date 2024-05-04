const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

const {getTareas, crearTareas, updateTareas, deleteTareas} = require('../controllers/tareasController')


router.route('/').get(protect, getTareas).post(protect, crearTareas)

//router.post('/', protect, crearTareas)

router.route('/:id').delete(protect, deleteTareas).put(protect, updateTareas)

module.exports = router