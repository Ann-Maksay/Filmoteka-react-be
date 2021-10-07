const express = require("express");
const { users: cntrl } = require("../controllers");
const router = express.Router();

router.get("/watched", cntrl.getWatchedList);
router.post("/watched", cntrl.addWatched);
router.patch("/watched", cntrl.deleteWatched);

router.get("/queue", cntrl.getQueueList);
router.post("/queue", cntrl.addQueue);
router.patch("/queue", cntrl.deleteQueue);

module.exports = router;
