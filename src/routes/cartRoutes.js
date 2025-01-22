const express = require('express');
const { getCart, addToCart, removeFromCart, updateCart } = require('../controllers/cartController');
const router = express.Router();

router.get('/', getCart);
router.post('/add', addToCart);
router.post('/remove', removeFromCart);
router.post('/update', updateCart);

module.exports = router;