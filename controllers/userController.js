const asyncHandler = require('express-async-handler')

// desc:    Get User
// @route:   GET /api/user
// @access: Private
const getUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get user" });
});

// desc:    Create User
// @route:   POST /api/user
// @access: Private
const createUser = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text");
  }

  res.status(200).json({ message: "create user" });
});

// desc:    Update User
// @route:   PUT /api/user
// @access: Private
const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update user ${req.params.id}` });
});

// desc:    Delete User
// @route:   DELETE /api/user
// @access: Private
const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete user ${req.params.id}` });
});

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
