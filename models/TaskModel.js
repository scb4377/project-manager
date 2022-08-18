const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    subject: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
