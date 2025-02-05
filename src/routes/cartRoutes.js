const express = require('express');
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');
const router = express.Router();
const protect = require('../middlewares/authMiddleware'); // Middleware d'authentification


router.get('/:id', getCart);
router.post('/add', protect, addToCart);
router.delete('/remove', protect, removeFromCart);

module.exports = router;