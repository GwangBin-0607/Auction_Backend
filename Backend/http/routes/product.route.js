const express = require('express');
const router = express.Router();
const listController = require('../controllers/product.list.controller');
const imageController = require('../controllers/product.image.controller');

router.get('/alllist', listController);
router.post('/productimage',imageController);

module.exports = router;