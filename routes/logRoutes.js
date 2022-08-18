const express = require("express");
const router = express.Router();
const {
  getLogs,
  updateLog,
  createLog,
  deleteLog,
  getAllLogs,
} = require("../controllers/logController");

router.route("/").get(getAllLogs)
router.route("/:id").get(getLogs).post(createLog).put(updateLog).delete(deleteLog);

module.exports = router;
