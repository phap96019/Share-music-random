const express = require('express');
const router = express.Router();
// const User = require('../models/Admin');
const controller = require('../controllers/adminController');
router.get('/get', (req, res) => {
  res.send('admin');
});
router.post('/register', controller.register);
// router.post("/login", controller.login);

module.exports = router;
