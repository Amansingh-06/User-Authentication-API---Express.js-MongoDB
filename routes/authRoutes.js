const express = require('express');
const { Login, register } = require('../conrollers/authController');

const router = express.Router();

router.post('/login', Login)
router.post('/register', register)

module.exports= router