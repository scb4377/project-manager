const asyncHandler = require("express-async-handler");
const Team = require("../models/TeamModel");
const User = require("../models/UserModel");

// @desc    Get Teams
// @route   GET /api/project/single
// @access  Private
const getTeams = asyncHandler(async (req, res) => {
  const teams = await Team.find();

  if (teams) {
    res.status(201).json(teams);
  } else {
    res.status(400);
    throw new Error("No teams found");
  }
});

// @desc    Create team
// @route   POST /api/project/single
// @access  Private
const createTeam = asyncHandler(async (req, res) => {
  const { teamName } = req.body;

  // if required fields blank
  if (!teamName) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // check if team exists
  const teamExists = await Team.findOne({ teamName });

  if (teamExists) {
    res.status(400);
    throw new Error("Team already exists");
  }

  // create the team
  const team = await Team.create({
    teamName,
  });

  if (team) {
    res.status(201).json({
      _id: team.id,
      teamName: team.teamName,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Team data");
  }
});

// @desc  Add employee
// @route /api/team/:id
const addEmpId = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const teamId = req.params.id;

  if (!id) {
    res.status(400);
    throw new Error("Please add a team name");
  }

  const team = await Team.findOneAndUpdate(
    { teamId },
    { $addToSet: { empIds: id } }
  );
  const user = await User.findByIdAndUpdate({ _id: id }, { teamId: teamId });

  if (team && user) {
    res.status(201).json({
      _id: team.id,
      teamName: team.teamName,
      empIds: team.empIds,
    });
  } else {
    res.status(400);
    throw new Error("Invalid team data");
  }
});

module.exports = {
  getTeams,
  createTeam,
  addEmpId,
};
