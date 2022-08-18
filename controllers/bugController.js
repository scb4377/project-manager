const asyncHandler = require("express-async-handler");
const Bug = require("../models/BugModel");
const Project = require("../models/ProjectModel");

const getBug = asyncHandler(async (req, res) => {
  const bug = await Bug.findById(req.params.id)

  if (!bug) {
    res.status(400);
    throw new Error("Couldn't find bug!")
  } else {
    res.status(201).json(bug)
  }
})

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
  const { issue, priority, dueBy, creator, projId, teamId, description } = req.body;

  const status = "Open"

  // create the user
  const bug = await Bug.create({
    issue,
    priority,
    dueBy,
    creator,
    projId,
    teamId,
    description,
    status
  });

  const project = await Project.updateOne(
    { _id: projId },
    { $push: { bugs: bug._id } }
  );

  if (bug && project) {
    res.status(201).json({
      bug,
    });
  } else {
    res.status(400);
    throw new Error("Invalid bug data");
  }
});

// @route PUT /api/bugs/addComment
const addComment = asyncHandler(async (req, res) => {
  const bug = await Bug.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { comments: req.body } },
    { new: true }
  );

  if (!bug) {
    res.status(400);
    throw new Error("Bug not found");
  } else {
    res.status(200).send(true);
  }
})

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
  addComment,
  getBug
};
