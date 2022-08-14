const asyncHandler = require('express-async-handler')
const Task = require('../models/TaskModel')

// @desc    Get tasks
// @route   GET /api/tasks
const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find();

  if (tasks) {
    res.status(201).json(tasks);
  } else {
    res.status(400);
    throw new Error("No tasks found");
  }
})

// @desc    Create tasks
// @route   POST /api/tasks
const createTask = asyncHandler(async (req, res) => {

})

// @desc    Update task
// @route   PUT /api/tasks/:id
const updateTask = asyncHandler(async (req, res) => {

})

// @desc    Delete task
// @route   DELETE /api/tasks/:id
const deleteTask = asyncHandler(async (req, res) => {

})

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
}