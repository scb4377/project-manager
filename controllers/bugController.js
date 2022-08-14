const asyncHandler = require("express-async-handler");
const Bug = require("../models/BugModel");

const getBugs = asyncHandler(async (req, res) => {
  const bugs = await Bug.find();

  if (bugs) {
    res.status(201).json(bugs);
  } else {
    res.status(400);
    throw new Error("No Bugs found");
  }
});

const createBug = asyncHandler(async (req, res) => {
  const { issue, priority, dueBy, creator, projId } = req.body;

  // create the user
  const bug = await Bug.create({
    issue,
    priority,
    dueBy,
    creator,
    projId
  });

  if (bug) {
    res.status(201).json({
      bug
    });
  } else {
    res.status(400);
    throw new Error("Invalid bug data");
  }
});

const updateBug = asyncHandler(async (req, res) => {
  console.log(req.body.id);
});

const deleteBug = asyncHandler(async (req, res) => {
  console.log(req.body.id);
});

module.exports = {
  getBugs,
  createBug,
  updateBug,
  deleteBug,
};
