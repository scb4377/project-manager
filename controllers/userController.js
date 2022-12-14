const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/UserModel");

// desc:    Get user signed in
// @route:   GET /api/user/me
// @access: Private
const getMe = asyncHandler(async (req, res) => {
  const { _id, username, firstName, lastName, email, phone, img, tasks } =
    await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    username,
    firstName,
    lastName,
    email,
    phone,
    img,
    tasks,
  });
});

// desc:    Login User
// @route:   POST /api/user/login
// @access: Private
const loginUser = asyncHandler(async (req, res) => {
  if (Object.keys(req.body).includes("demo")) {
    const username = process.env.DEMO_USER;
    const password = process.env.DEMO_PASSWORD;

    // check for email
    const user = await User.findOne({ username });

    // check password
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        phone: user.phone,
        img: user.img,
        tasks: user.tasks,
        teamId: user.teamId,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid username or password combination!");
    }
  } else {
    const { username, password } = req.body;

    // check for email
    const user = await User.findOne({ username });

    // check password
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        phone: user.phone,
        img: user.img,
        tasks: user.tasks,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid username or password combination!");
    }
  }
});

// desc:    Get Users
// @route:   GET /api/user
// @access: Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find(
    {},
    { password: 0, createdAt: 0, updatedAt: 0, _v: 0 }
  );

  if (users) {
    res.status(201).json(users);
  } else {
    res.status(400);
    throw new Error("No users found");
  }
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
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// desc:    Update User
// @route:   PUT /api/user/
// @access: Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
  }).select("-password");

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  } else {
    res.status(200).json(user);
  }
});

// desc:    Delete User
// @route:   DELETE /api/user/:id
// @access: Private
const deleteUser = asyncHandler(async (req, res) => {
  const authorizedUser = User.findById(req.user.id);

  if (!authorizedUser) {
    res.status(400);
    throw new Error("Not Authorized");
  }

  const user = await User.findByIdAndDelete(req.params.id);

  if (user) {
    res.status(200).send({ message: "Deleted User" });
  } else {
    res.status(400);
    throw new Error("Failed to delete user");
  }
});

const addTask = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { $push: { tasks: req.body } },
    {
      new: true,
    }
  ).select("-password");

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  } else {
    res.status(200).json(user);
  }
});

const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { $pull: { tasks: { id: id } } },
    {
      new: true,
    }
  ).select("-password");

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  } else {
    res.status(200).json(user);
  }
});

// const generateCookie = asyncHandler(async (req, res, token) => {
//   res.cookie("token", token, {
//     httpOnly: false,
//   });
// });

// const generateToken = (id) => {
//   const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });

//   if (token) {
//     generateCookie(token);
//   } else {
//     res.status(400);
//     throw new Error("Not Authorized");
//   }
// };

// // Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = {
  deleteTask,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getMe,
  loginUser,
  addTask,
};
