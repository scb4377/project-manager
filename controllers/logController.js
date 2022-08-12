const asyncHandler = require('express-async-handler')
const Log = require("../models/LogModel")

// @desc    Get Logs
// @route   GET /api/logs/
const getLogs = asyncHandler(async (req, res) => {

})

// @desc    Create Logs
// @route   POST /api/logs/
const createLog = asyncHandler(async (req, res) => {

})

// @desc    Update Log
// @route   PUT /api/logs/:id
const updateLog = asyncHandler(async (req, res) => {

})

// @desc    Delete Log
// @route   DELETE /api/logs/:id
const deleteLog = asyncHandler(async (req, res) => {

})

module.exports = {
    getLogs,
    createLog,
    updateLog,
    deleteLog,
}
