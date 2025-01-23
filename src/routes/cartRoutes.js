const express = require('express');
const { getCart, addToCart, removeFromCart, updateCart } = require('../controllers/cartController');
const router = express.Router();
const auth = require('../middlewares/authMiddleware'); // Middleware d'authentification


router.get('/:id', getCart);
router.post('/add',auth, addToCart);
router.post('/remove',auth, removeFromCart);

module.exports = router;