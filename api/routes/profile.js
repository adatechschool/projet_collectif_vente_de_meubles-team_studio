var express = require("express");
const { Sequelize } = require("sequelize");
var router = express.Router();
require("dotenv").config();
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const checksession = require('../middleware/checksession')
//var session = require('express-session');

const sequelize = new Sequelize(
  process.env.database,
  process.env.user,
  process.env.password,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

/* GET users listing. */
router.get("/", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, "secretPass", {}, (err, user) => {
      if (err) throw err;
      console.log(user);
      res.json(user);
    });
  } else {
    res.json({});
  }
});

module.exports = router;
