const express = require('express');
const router = express.Router();
const listController = require('./productList.controller');
const imageController = require('./productImage.controller');

router.get('/alllist', listController.allProductList);
router.post('/productimage',imageController.product_image);

module.exports = router;