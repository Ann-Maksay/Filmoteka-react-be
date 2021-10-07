const express = require("express");
const { auth: cntrl } = require("../controllers");
const { isAuth, validateMiddleware } = require("../middlewares");
const { validateNewUser, validateLoginUser } = require("../validation");
const router = express.Router();

router.post("/signup", validateMiddleware(validateNewUser), cntrl.signup);
router.post("/login", validateMiddleware(validateLoginUser), cntrl.login);
router.get("/logout", isAuth, cntrl.logout);

module.exports = router;
