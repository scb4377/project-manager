const mongoose = require("mongoose");

const teamSchema = mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
    },
    empIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Team",
      },
    ],
    projIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Team", teamSchema);
