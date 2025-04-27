const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Get Mongo URI
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("Error: MONGO_URI not found in .env file");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connection successful!");
    process.exit(0); // Exit success
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Exit with failure
  });
