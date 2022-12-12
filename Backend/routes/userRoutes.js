const express = require('express');
const router = express.Router();
const {
  allImages,
  searchImages
} = require('../controllers/userController');



router.get('/',  allImages);
router.get('/:tag',searchImages);

module.exports = router;