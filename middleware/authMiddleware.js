const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

// const protect = asyncHandler(async (req, res, next) => {
//   const token = req.cookies.token;

//   if (!token) {
//     res.status(401);
//     throw new Error("Not Authorized, No Token");
//   }

//   try {
//     const user = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = user;
//     next();
//   } catch (err) {
//     res.clearCookie("token");
//     res.status(401);
//     throw new Error("Not Authorized");
//   }
// });

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token from header
      token = req.headers.authorization.split(" ")[1];

      // verify
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // get user from token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (err) {
      console.log(err);
      res.status(401);
      throw new Error("Not Authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, No Token");
  }
});

module.exports = { protect };
