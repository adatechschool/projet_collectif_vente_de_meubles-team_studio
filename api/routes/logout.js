var express = require("express");
const { Sequelize } = require("sequelize");
var router = express.Router();
require("dotenv").config();
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  res.cookie("token", "").json(true);
});

module.exports = router;
