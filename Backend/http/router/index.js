const express = require('express');
const router = express.Router();

const main = require('./main');
const user = require('./productList')

router.use('/main', main);
router.use('/products', user);

module.exports = router;