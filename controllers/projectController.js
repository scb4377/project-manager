const asyncHandler = require("express-async-handler");
const Project = require('../models/ProjectModel')

// @desc    Create project
// @route   POST /api/project/
// @access  Private
const createProject = asyncHandler(async (req, res) => {

})

// @desc    Update project
// @route   PUT /api/project/:id
// @access  Private
const updateProject = asyncHandler(async (req, res) => {

})

// @desc    Delete project
// @route   DELETE /api/project/:id
// @access  Private
const deleteProject = asyncHandler(async (req, res) => {

})

// @desc    Get Projects
// @route   GET /api/project/
// @access  Private
const getProjects = asyncHandler(async (req, res) => {

})

module.exports = {
    createProject,
    getProjects,
    updateProject,
    deleteProject,
}