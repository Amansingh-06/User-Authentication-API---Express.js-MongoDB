const express = require('express');
const getUserByEmail = require('../conrollers/userController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/user', verifyToken ,getUserByEmail)


module.exports = router