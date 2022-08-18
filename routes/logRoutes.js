const express = require("express");
const router = express.Router();
const {
  getLogs,
  updateLog,
  createLog,
  deleteLog,
} = require("../controllers/logController");


router.route("/:id").get(getLogs).post(createLog).put(updateLog).delete(deleteLog);

module.exports = router;
