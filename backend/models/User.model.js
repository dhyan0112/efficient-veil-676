const mongoose = require("mongoose");
//usermodel
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  workspace: {
    type: mongoose.Schema.Types.ObjectId,

    ref: "Workspace"

    ref: "Workspace",
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = {UserModel};
