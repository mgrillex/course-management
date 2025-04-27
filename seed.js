const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./users/userModel");
const Course = require("./course/courseModel");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected - Seeding Data");

    // Clear existing data
    await User.deleteMany();
    await Course.deleteMany();

    // Insert users
    const users = await User.insertMany([
      {
        name: "Alice Smith",
        email: "alice@example.com",
        password: "password123",
        plan: "basic",
        profilePhoto: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      {
        name: "Bob Johnson",
        email: "bob@example.com",
        password: "password123",
        plan: "premium",
        profilePhoto: "https://randomuser.me/api/portraits/men/3.jpg",
      },
    ]);

    // Insert courses
    const courses = await Course.insertMany([
      {
        name: "React for Beginners",
        category: "Frontend",
        link: "https://example.com/react-course",
      },
      {
        name: "Advanced MongoDB",
        category: "Database",
        link: "https://example.com/mongodb-course",
      },
    ]);

    console.log("Data Seeded Successfully!");
    process.exit();
  })
  .catch((error) => {
    console.error("Error seeding data:", error.message);
    process.exit(1);
  });
