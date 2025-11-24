const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  addRecipe,
  getFeed,
  getMyRecipe,
  getAllRecipe,
  getSingleRecipe,
  updateRecipe,
} = require("../controllers/recipe.controller");

// POST /recipe/add
router.post("/add", protect, addRecipe);

// GET /recipe/feed
router.get("/feed", protect, getFeed);

// GET /recipe/getMyRecipe
router.get("/getMyRecipe", protect, getMyRecipe);

// GET /recipe/getAllRecipe
router.get("/getAllRecipe", getAllRecipe);

// GET /recipe/getSingleRecipe/:id
router.get("/getSingleRecipe/:id", protect, getSingleRecipe);

// PATCH /recipe/update/:id
router.patch("/update/:id", protect, updateRecipe);

module.exports = router;
