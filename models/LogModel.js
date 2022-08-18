const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    bug: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Bug",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Log", logSchema);
