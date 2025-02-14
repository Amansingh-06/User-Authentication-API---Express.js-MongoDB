const express = require("express");
const User = require('../models/User')
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')


const register = async(req,res)=>{
    try {
        const { fullname, email, password, DOB, gender, country } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({
                message:"User already exists"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const newUser = new User({
            fullname,
            email,
            password:hashedPassword,
            DOB,
            gender,
            country
        })
        await newUser.save();

        res.status(201).json({
            message: "User created successfully",
            newUser
        })
    } catch (err) {
        res.status(500).json({
            message: "Server Error",
            err
        })
    }
}

//Login

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message:"User Not Found"
            })

        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message:"Invalid credentials"
            })
        }
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        )
        res.status(200).json({
            message: "Login Succesfull",
            token: token,
            user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
                gender: user.gender,
                country: user.country,
                DOB:user.DOB
            }
        })
    }
    catch (err) {
        res.status(500).json({
            message: "Server Err",
            err
        })
    }
}

module.exports = {Login,register}

