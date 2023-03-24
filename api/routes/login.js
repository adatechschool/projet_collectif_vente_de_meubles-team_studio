var express = require("express");
const { Sequelize } = require("sequelize");
var router = express.Router();
require("dotenv").config();
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sequelize = new Sequelize(
  process.env.database,
  process.env.user,
  process.env.password,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  let sql3 = `SELECT user_id ,user_email, user_password, user_first_name From user WHERE user_email = '${email}'`;
  const checkUser = await sequelize
    .query(sql3, {
      type: sequelize.QueryTypes.SELECT,
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(checkUser);
  if (checkUser.length === 0) {
    return res.send({ message: "User Not Found" });
    // .redirect('/registration')//modif send instead of json
  } else {
    bcrypt.compare(
      password,
      checkUser[0]["user_password"],
      async (err, data) => {
        if (err) {
          return res.send("error verifying credentials");
        } else if (data) {
          jwt.sign(
            {
              user_first_name: checkUser[0]["user_first_name"],
              Id: checkUser[0]["user_id"],
              email: checkUser[0]["user_email"],
            },
            "secretPass",
            {},
            (err, token) => {
              if (err) throw err;
              return res
                .cookie("token", token, {
                  httpOnly: true,
                  sameSite: "strict",
                })
                .send({ message: "Login Successful", checkUser });
            }
          );
        } else {
          return res.send({ message: "Invalid credentials" });
        }
      }
    );
  }
});

module.exports = router;
