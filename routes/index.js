const express = require("express");
const router = express.Router();
const passport = require("passport");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.post("/api/login", passport.authenticate("local"), (req, res) => {
  return res.json({
    ok: true
  });
});

router.get("/api/verify", (req, res) => {
  return res.json(req.user);
});

module.exports = router;
