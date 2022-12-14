const express = require('express');
const router = express.Router();
const controller = require('./productList.controller');

/* GET users listing. */
router.get('/alllist', controller.all_products);

module.exports = router;