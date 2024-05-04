const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

const {getRequest, crearRequest} = require('../controllers/requestController')

router.route('/').get(getRequest).post(crearRequest)

module.exports = router