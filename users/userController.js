const User = require("./userModel");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, plan, profilePhoto } = req.body;

    const newUser = new User({
      name,
      email,
      password,
      plan,
      profilePhoto,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate("enrolledCourses");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("enrolledCourses");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const { name, email, plan, profilePhoto } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, plan, profilePhoto },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Enroll user in a course
exports.enrollCourse = async (req, res) => {
  try {
    const { userId, courseId } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.enrolledCourses.includes(courseId)) {
      return res
        .status(400)
        .json({ message: "Already enrolled in this course" });
    }

    user.enrolledCourses.push(courseId);
    await user.save();

    res.status(200).json({ message: "Enrolled successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
