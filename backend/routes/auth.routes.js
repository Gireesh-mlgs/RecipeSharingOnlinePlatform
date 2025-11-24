const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/signup", upload.single("profileImage"), signup);
router.post("/login", login);

module.exports = router;
