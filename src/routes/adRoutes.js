const express = require('express');
const { getAllAd, getOneAd, createAd, deleteAd, changeAd } = require('../controllers/adController');
const router = express.Router();
const multer = require('multer');
const auth = require('../middlewares/authMiddleware')

const upload = multer({ dest: 'uploads/' })

router.get('/', getAllAd);
router.get('/:id', getOneAd);
router.post('/', auth, upload.single('imageFile'), createAd);
router.delete('/:id', auth, deleteAd);
router.put('/:id', auth, changeAd);


module.exports = router; 