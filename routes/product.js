const express = require('express');
const router = express.Router();
//const Product = require("../models/Product");
const controller = require('../controllers/controller');

router.get('/', controller.index);
router.post('/post', controller.post);

module.exports = router;
