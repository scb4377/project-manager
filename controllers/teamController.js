const asyncHandler = require("express-async-handler");
const Team = require("../models/TeamModel");

// @desc    Get Teams
// @route   GET /api/project/single
// @access  Private
const getTeams = asyncHandler(async, (req, res) => {});

// @desc    Create team
// @route   POST /api/project/single
// @access  Private
const createTeam = asyncHandler(async (req, res) => {});

module.exports = {
  getTeams,
  createTeam,
};
