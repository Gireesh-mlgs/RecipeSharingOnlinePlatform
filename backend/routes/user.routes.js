const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const { getLoggedUser, updateUser } = require("../controllers/user.controller");

// GET /users  -> logged-in user
router.get("/", protect, getLoggedUser);

// PATCH /users/update/:id
router.patch("/update/:id", protect, updateUser);

module.exports = router;
