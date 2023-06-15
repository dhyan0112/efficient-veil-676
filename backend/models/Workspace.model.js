const mongoose = require("mongoose");

const workspaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
    unique: true,
  },
});

const Workspace = mongoose.model("Workspace", workspaceSchema);

module.exports = Workspace;
