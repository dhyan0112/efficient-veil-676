const Workspace = require("../models/Workspace.model");

const createWorkspace = async (req, res) => {
  try {
    // Create workspace logic
    const { name, key } = req.body;
    const workspace = await Workspace.create({ name, key });

    res.status(201).json(workspace);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getWorkspace = async (req, res) => {
  try {
    // Get workspace logic
    const { workspaceId } = req.params;
    const workspace = await Workspace.findById(workspaceId);

    if (!workspace) {
      return res.status(404).json({ error: "Workspace not found" });
    }

    res.status(200).json(workspace);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  createWorkspace,
  getWorkspace,
};
