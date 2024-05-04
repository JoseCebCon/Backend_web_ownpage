const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

const {getRequest, crearRequest, updateRequest, deleteRequest} = require('../controllers/requestController')

router.route('/').get(protect, getRequest).post(protect, crearRequest)
router.route('/:id').delete(protect, deleteRequest).put(protect, updateRequest)

module.exports = router