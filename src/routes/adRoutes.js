const express = require('express');
const { getAllAd, createAd } = require('../controllers/adController');
const router = express.Router();

router.get('/', getAllAd);
router.post('/addAnnonce', createAd);

module.exports = router; 