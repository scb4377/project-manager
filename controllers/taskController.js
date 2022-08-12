const asyncHandler = require('express-async-handler')
const Task = require('../models/TaskModel')

// @desc    Get tasks
// @route   GET /api/tasks
const getTasks = asyncHandler(async (req, res) => {

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