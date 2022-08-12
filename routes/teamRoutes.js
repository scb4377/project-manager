const express = require("express");
const router = express.Router();
const { getTeams, createTeam, addEmpId } = require("../controllers/teamController");

router.route("/").get(getTeams).post(createTeam);
router.route("/:id").put(addEmpId)

module.exports = router;
