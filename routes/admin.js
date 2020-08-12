const express = require("express");
const router = express.Router();
// const User = require('../models/Admin');
const controller = require("../controllers/adminController");
router.get("/login", controller.index);
router.post("/api/register", controller.register);
router.post("/api/login", controller.login);

module.exports = router;
