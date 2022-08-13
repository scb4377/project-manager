const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  getMe,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getUsers).post(createUser).put(protect, updateUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.route("/:id").delete(protect, deleteUser);

module.exports = router;