const express = require("express");
const router = express.Router();
const {
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getProjects,
} = require("../controllers/projectController");
// const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getProjects).post(createProject);
router.route("/:id").put(updateProject).delete(deleteProject);

module.exports = router;
