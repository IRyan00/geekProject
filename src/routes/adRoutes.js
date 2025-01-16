const express = require('express');
const { getAllAd, getOneAd, createAd, deleteAd, changeAd } = require('../controllers/adController');
const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: 'uploads/' })

router.get('/', getAllAd);
router.get('/:id', getOneAd);
router.post('/', upload.single('imageFile'), createAd);
router.delete('/:id', deleteAd);
router.put('/:id', changeAd);


module.exports = router; 