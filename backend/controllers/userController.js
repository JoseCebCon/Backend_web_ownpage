const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const { use } = require('../routes/tareasRoutes')
const User = require('../models/userModel')

const register = asyncHandler(async (req, res) => {
    const { name, lastname, email, password } = req.body

    if (!name || !lastname || !email || !password) {
        res.status(400)
        throw new Error('You need data')
    }

    const userExiste = await User.findOne({email})
    if(userExiste){
        res.status(400)
        throw new Error('The user exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        lastname,
        email,
        password: hashedPassword
    })

    res.status(201).json({user})
})

const login = asyncHandler( async(req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id: user.id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            token: generarToken(user.id)
        })
    } else{
        res.status(401)
        throw new Error('Invalid credentials')
    }
})

const generarToken = (idusuario) => {
    return jwt.sign({id: idusuario}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

const showdata = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})

module.exports = {
    register,
    login,
    showdata
}