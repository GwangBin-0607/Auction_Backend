const express = require('express');
const router = express.Router();
const controller = require('./productList.controller');

/* GET users listing. */
router.get('/images', controller.users);

module.exports = router;