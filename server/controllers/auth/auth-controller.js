const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User')

// register controller 
const register = async (req, res) => {
    const { userName, email, password } = req.body

    try {
        const hashPassword = await bcrypt.hash()
        
    } catch (e) {
        console.log(e)
        res.status(500).json({
            success: false,
            message: "some error occured"
        })
    }
}

// login controller
const login = async (req, res) => {
    try {

    } catch (e) {
        console.log(e)
        res.status(500).json({
            success: false,
            message: "some error occured"
        })
    }
}