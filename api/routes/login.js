var express = require('express');
const { Sequelize } = require('sequelize');
var router = express.Router();
require('dotenv').config();
var bcrypt = require("bcrypt");
const saltRounds = 10;
const session = require('express-session');
var app = express();

app.use(session({
  name : process.env.SESSION_NAME,
  resave : false,
  saveUninitialized : false,
  secret : process.env.SESSION_SECRET
  }));

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
dialect: 'mysql', host: 'localhost'
});

router.post('/', async(req,res)=>{
    const {email,password} = req.body;
    let sql3 = `SELECT user_email, user_password From user WHERE user_email = '${email}'`
    const checkUser = await sequelize.query(sql3, {
                        type: sequelize.QueryTypes.SELECT
                        }).catch((err)=>{
                        console.log(err)
                        })
    console.log(checkUser)
    if (checkUser.length === 0) {
        return res.json({message:"User Not Found"})
    }else {
        bcrypt.compare(password, checkUser[0]['user_password'], async (err, data) => {
                if(err) {return res.json("error verifying credentials")}
                else if (data) {
                    console.log("Login Successful")
                    let sql = `SELECT user_id FROM user WHERE user_email = '${email}'`;
                    const user = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
                    let userId = "";
                    if (user.length > 0) {
                        userId += user[0].user_id;
                        req.session.userId = userId;
                        console.log(req.session.userId);
                        
                    }
                    return (res.send({msg : userId}),
                            res.redirect('/furnitures'))
                    
                    //return res.json({ msg: "Login successful" })
                } else {
                    return res.json({ msg: "Invalid credentials" })
                }
    })
}})

module.exports = router;