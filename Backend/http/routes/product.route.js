//@ts-check
const express = require('express');
const router = express.Router();
const listController = require('../controllers/product.list.controller');
const imageController = require('../controllers/product.image.controller');
const detailController = require('../controllers/product.detail.controller')
router.post('/alllist', listController);
router.post('/productimage',imageController);
router.post('/detailproduct',detailController)

module.exports = router;