const express = require('express');
const { getAllUsers, createUser } = require('../controllers/authController');
const router = express.Router();

router.get('/', getAllUsers);
router.post('/addUser', createUser);


module.exports = router; 