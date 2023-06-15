const Message = require("../models/message");

const createMessage = async (req, res) => {
  try {
    // Create message logic
    const { content, userId, channelId } = req.body;
    const message = await Message.create({
      content,
      user: userId,
      channel: channelId,
    });

    res.status(201).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getMessage = async (req, res) => {
  try {
    // Get message logic
    const { messageId } = req.params;
    const message = await Message.findById(messageId);

    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.status(200).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  createMessage,
  getMessage,
};
