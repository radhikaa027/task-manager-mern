const express = require("express");
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/taskController");

const router = express.Router();

// Routes
router.get("/", getTasks); // Fetch all tasks
router.post("/", createTask); // Create a task
router.put("/:id", updateTask); // Update a task by ID
router.delete("/:id", deleteTask); // Delete a task by ID

module.exports = router;
