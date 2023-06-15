const Channel = require("../models/channel");

const createChannel = async (req, res) => {
  try {
    // Create channel logic
    const { name, workspaceId } = req.body;
    const channel = await Channel.create({ name, workspace: workspaceId });

    res.status(201).json(channel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getChannel = async (req, res) => {
  try {
    // Get channel logic
    const { channelId } = req.params;
    const channel = await Channel.findById(channelId);

    if (!channel) {
      return res.status(404).json({ error: "Channel not found" });
    }

    res.status(200).json(channel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  createChannel,
  getChannel,
};
