const express = require("express");
const router = express.Router();
const userController = require("./userController");

// Routes
router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.post("/enroll", userController.enrollCourse);

module.exports = router;
