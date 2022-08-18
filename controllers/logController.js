const asyncHandler = require('express-async-handler')
const Log = require("../models/LogModel")

// test to see for logcreation

// const getLogs = asyncHandler(async (req, res) => {
//     const logs = await Log.find({})

//     if (!logs) {
//         res.status(400)
//         throw new Error("Could not find logs")
//     } else {
//         res.status(200).json(logs)
//     }
// })

// @desc    Get Log
// @route   GET /api/logs/:id
const getLogs = asyncHandler(async (req, res) => {
    const { userId, bugId } = req.query
    const log = await Log.find({bug: bugId, user: userId})

    if (!log) {
        res.status(400)
        throw new Error("Could not find logs")
    } else {
        res.status(200).json(log)
    }
})

// @desc    Create Logs
// @route   POST /api/logs/:id
const createLog = asyncHandler(async (req, res) => {
    const { subject, description, userId } = req.body;

    const log = await Log.create({
        subject,
        description,
        user: userId,
        bug: req.params.id,
    })

    if (!log) {
        res.status(400)
        throw new Error("Could not create log")
    } else {
        res.status(200).json(log)
    }
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
