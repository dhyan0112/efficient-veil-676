const { Router } = require("express");
const channelController = require("../controllers/channelController");

const router = Router();

router.post("/channels", channelController.createChannel);
router.get("/channels/:channelId", channelController.getChannel);

module.exports = router;
