const { Router } = require("express");
const messageController = require("../controllers/messageController");

const router = Router();

router.post("/messages", messageController.createMessage);
router.get("/messages/:messageId", messageController.getMessage);

module.exports = router;
