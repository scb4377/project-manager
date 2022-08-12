const mongoose = require("mongoose");

const bugSchema = mongoose.Schema(
  {
    issue: {
      type: String,
      required: true,
    },
    priority: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    dueBy: {
      type: Date,
      required: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    comments: [
      {
        author: String,
        date: Date.now(),
        body: String,
      },
    ],
    projId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Project",
    },
    logIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Log",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bug", bugSchema);
