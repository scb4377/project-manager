const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
    },
    empIds: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Team",
      },
    ],
    projIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Team", teamSchema);
