const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { name, email, password, city, gender, bio } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide name, email and password" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashed,
      city,
      gender,
      bio,
      profileImage: req.file ? req.file.buffer : null,
    });

    await user.save();

    res.json({
      message: "Signup successful",
      user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ userId: user._id }, "secret123", {
      expiresIn: "7d",
    });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
