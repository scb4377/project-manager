const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/UserModel");

// desc:    Get user signed in
// @route:   GET /api/user/me
// @access: Private
const getMe = asyncHandler(async (req, res) => {
  const { _id, firstName, lastName, email } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    firstName,
    lastName,
    email,
  });
});

// desc:    Login User
// @route:   POST /api/user/login
// @access: Private
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // check for email
  const user = await User.findOne({ username });

  // check password
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid username or password combination!");
  }
});

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
  const { firstName, lastName, email, username, password } = req.body;

  // if required fields blank
  if (!firstName || !lastName || !email || !username || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // check if already created
  const userExists = await User.findOne({ username });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create the user
  const user = await User.create({
    firstName,
    lastName,
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// desc:    Update User
// @route:   PUT /api/user/:id
// @access: Private
const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update user ${req.params.id}` });
});

// desc:    Delete User
// @route:   DELETE /api/user/:id
// @access: Private
const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete user ${req.params.id}` });
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getMe,
  loginUser,
};
