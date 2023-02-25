//@ts-check
const express = require('express');
const router = express.Router();
const listController = require('../controllers/product.list.controller');
const imageController = require('../controllers/product.image.controller');
const detailController = require('../controllers/product.detail.controller');
const currentProductPriceController = require('../controllers/product.currentProductPrice.controller');
router.post('/alllist', listController);
router.post('/productimage',imageController);
router.post('/detailproduct',detailController);
router.post('/currentproductprice',currentProductPriceController);

module.exports = router;