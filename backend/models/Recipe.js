const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  ingredients: { type: [String], default: [] },
  steps: { type: [String], default: [] },
  images: { type: [String], default: [] },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Recipe", recipeSchema);
