const express = require("express");
const { auth: cntrl } = require("../controllers");
const router = express.Router();

router.post("/signup", cntrl.signup);
router.post("/login", cntrl.login);
router.get("/logout", cntrl.logout);

module.exports = router;
