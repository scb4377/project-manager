const express = require("express");
const router = express.Router();
const {
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getProjects,
  addProjComment,
} = require("../controllers/projectController");
// const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getProjects).post(createProject);
router.route("/project/:id").get(getProject);
router.route("/comment/:id").put(addProjComment);
router.route("/:id").put(updateProject).delete(deleteProject);

module.exports = router;
