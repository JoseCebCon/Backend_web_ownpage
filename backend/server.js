const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const {errorHandler} = require ('./middleware/errorMiddleware')

connectDB()

const port = process.env.PORT || 5001

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/requests', require('./routes/requestRoutes'))
app.use('/api/tareas', require('./routes/tareasRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`))