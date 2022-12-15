const express = require('express');
const router = express.Router();
const listController = require('../controllers/productList.controller');
const imageController = require('../controllers/productImage.controller');

router.get('/alllist', listController);
router.post('/productimage',imageController);

module.exports = router;