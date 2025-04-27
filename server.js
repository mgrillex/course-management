const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./users/userRouter");
const courseRoutes = require("./course/courseRouter");
const app = express();

// Load environment variables
dotenv.config();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Routes
app.use("/users", userRoutes);
app.use("/courses", courseRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the Courses App API 🎯");
});

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
