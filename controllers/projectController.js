const asyncHandler = require("express-async-handler");
const Project = require("../models/ProjectModel");

// @desc    get project
// @route   GET /api/project/
// @access  Private
const getProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(400);
    throw new Error("Project not found");
  } else {
    res.status(200).json(project);
  }
});

// @desc    Create project
// @route   POST /api/project/
// @access  Private
const createProject = asyncHandler(async (req, res) => {
  const { teamId, projTitle, company, stage } = req.body;

  // if required fields blank
  if (!teamId || !projTitle || !company || !stage) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // check if team exists
  const projectExists = await Project.findOne({ projTitle });
  const foundTeam = await Team.findOne({ teamId })

  if (projectExists) {
    res.status(400);
    throw new Error("Project already exists");
  }

  // create the team
  const project = await Project.create({
    team: teamId,
    projTitle,
    company,
    stage,
    teamName: foundTeam.teamName
  });

  if (project) {
    res.status(201).json({
      project,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Project data");
  }
});

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private
const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!project) {
    res.status(400);
    throw new Error("Project not found");
  } else {
    res.status(200).json(project);
  }
});

// @desc    Add comment
// @route   PUT /api/projects/comment/:id
// @access  Private
const addProjComment = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    { $push: { comments: req.body } },
    { new: true }
  );

  if (!project) {
    res.status(400);
    throw new Error("Project not found");
  } else {
    console.log(project);
    res.status(200).json(project);
  }
});

// @desc    Delete project
// @route   DELETE /api/project/:id
// @access  Private
const deleteProject = asyncHandler(async (req, res) => {});

// @desc    Get Projects
// @route   GET /api/project/
// @access  Private
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({}, { updatedAt: 0, _v: 0 });

  if (projects) {
    res.status(201).json(projects);
  } else {
    res.status(400);
    throw new Error("No projects found");
  }
});

module.exports = {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
  addProjComment,
  getProject,
};
