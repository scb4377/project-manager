const express = require("express");
const router = express.Router();
const {
  getLogs,
  updateLog,
  createLog,
  deleteLog,
} = require("../controllers/logController");

router.route("/").get(getLogs).post(createLog);
router.route("/:id").put(updateLog).delete(deleteLog);

module.exports = router;
