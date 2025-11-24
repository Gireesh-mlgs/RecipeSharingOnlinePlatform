const User = require("../models/User");

// GET /users  -> return logged-in user info
exports.getLoggedUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch user" });
  }
};

// PATCH /users/update/:id  -> update user fields (name, profileImage URL, etc.)
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (id !== req.user.id) return res.status(403).json({ message: "Unauthorized" });

    const updates = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true }).select("-password");
    res.json({ message: "User updated", updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update user" });
  }
};
