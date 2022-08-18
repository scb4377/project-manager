const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    team: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Team",
    },
    bugs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Bug"
      }
    ],
    projTitle: {
      type: String,
      required: true,
    },
    stage: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    comments: [
      {
        
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
