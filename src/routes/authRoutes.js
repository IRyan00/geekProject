const express = require('express');
const { getAllUsers, createUser, login, logout } = require('../controllers/authController');
const router = express.Router();
const auth = require('../middlewares/authMiddleware')

router.get('/', auth, getAllUsers);
router.post('/addUser', createUser);
// router.post('/login', login);
router.get('/logout', auth, logout);


module.exports = router; 