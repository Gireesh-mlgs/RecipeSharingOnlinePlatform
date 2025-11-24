require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const recipeRoutes = require("./routes/recipe.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: "*",
  methods: "GET,POST,PATCH,DELETE",
}));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

// Static folder for images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// TEST route
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Recipe backend (NEW) is running" });
});

// API Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/recipe", recipeRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(err.status || 500).json({
    message: err.message || "Server Error",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🔥 New Backend Running on Port ${PORT}`);
});
