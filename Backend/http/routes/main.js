const express = require('express');
const router = express.Router();
const controller = require('../controllers/main.controller');

/* GET home page. */
router.get('/', controller);

module.exports = router;