const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bugSchema = new Schema(
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
    },
    dueBy: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
    teamId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Team"
    },
    creator: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    comments: [
      {
        
      },
    ],
    projId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Project",
    },
    projTitle: {
      type: String,
    },
    logIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Log",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bug", bugSchema);
