const express = require("express");
const router = express.Router();
// const User = require('../models/Admin');
const controller = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");
//======Link=======
router.get("/api/get-all", controller.getAllLink);
//delete
router.post("/api/delete", controller.deleteMusicPre);
router.post("/api/confirm", controller.confirm);
//======Authenticated==========
router.get("/login", controller.index);
router.post("/api/register", controller.register);
router.post("/api/login", controller.login);
router.get("/list", authMiddleware.authMiddleware, controller.getListLink);

module.exports = router;
