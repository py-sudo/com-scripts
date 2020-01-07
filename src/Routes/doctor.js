const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  return res.send("getting doctors");
});

router.post("/", (req, res) => {
  res.send("posting doctors");
});

module.exports = router;
