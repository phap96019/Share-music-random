const express = require("express");
const router = express.Router();
// const User = require('../models/Admin');
const controller = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");
//======Link=======
router.get(
  "/api/get-all",
  authMiddleware.authMiddleware,
  controller.getAllLink
);
//delete
router.post(
  "/api/delete",
  authMiddleware.authMiddleware,
  controller.deleteMusicPre
);
router.post("/api/confirm", authMiddleware.authMiddleware, controller.confirm);
//======Authenticated==========
router.get("/login", controller.index);
router.post("/api/register", controller.register);
router.post("/api/login", controller.login);
router.get("/api/logout", controller.logout);
router.get("/list", authMiddleware.authMiddleware, controller.getListLink);
router.get("/", authMiddleware.authMiddleware, controller.getListLink);

module.exports = router;
