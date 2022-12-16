const express = require('express');
const router = express.Router();

const user = require('./product.route')

router.use('/products', user);

module.exports = router;