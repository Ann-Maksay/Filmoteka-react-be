const express = require("express");
const { users: cntrl } = require("../controllers");
const { isAuth } = require("../middlewares");
const router = express.Router();

router.get("/watched", isAuth, cntrl.getWatchedList);
router.post("/watched", isAuth, cntrl.addWatched);
router.patch("/watched", isAuth, cntrl.deleteWatched);

router.get("/queue", isAuth, cntrl.getQueueList);
router.post("/queue", isAuth, cntrl.addQueue);
router.patch("/queue", isAuth, cntrl.deleteQueue);

module.exports = router;
