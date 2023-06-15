const { Router } = require("express");
const workspaceController = require("../controllers/workspaceController");

const router = Router();

router.post("/workspaces", workspaceController.createWorkspace);
router.get("/workspaces/:workspaceId", workspaceController.getWorkspace);

module.exports = router;
