const express = require('express');
const { getAllAd, getOneAd, createAd, deleteAd, changeAd } = require('../controllers/adController');
const router = express.Router();
const multer = require('multer');
const protect = require('../middlewares/authMiddleware')

const upload = multer({ dest: 'uploads/' })

router.get('/', getAllAd);
router.get('/:id', getOneAd);
router.post('/', protect, upload.single('imageFile'), createAd);
router.delete('/:id', protect, deleteAd);
router.put('/:id', protect, changeAd);


module.exports = router;