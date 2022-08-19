const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      User: {
        type: Number,
        default: 2001,
      },
      Admin: Number,
    },
    img: {
      type: String,
    },
    projIds: [String],
    tasks: [
      {
        
      }
    ],
    logIds: [String],
    teamId: {
      type: Schema.Types.ObjectId,
      ref: "Team"
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
