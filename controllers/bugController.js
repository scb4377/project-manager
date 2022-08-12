const asyncHandler = require("express-async-handler");
const Bug = require("../models/BugModel");

const getBugs = asyncHandler(async (req, res) => {});

const createBug = asyncHandler(async (req, res) => {});

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
