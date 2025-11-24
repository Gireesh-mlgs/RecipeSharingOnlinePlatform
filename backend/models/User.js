const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  city: String,
  gender: String,
  bio: String,

  // Store image as buffer
  profileImage: {
    type: Buffer,
  },
});

module.exports = mongoose.model("User", userSchema);
