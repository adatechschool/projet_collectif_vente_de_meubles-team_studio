var express = require('express');
const { Sequelize } = require('sequelize');
var router = express.Router();
require('dotenv').config();
var bcrypt = require("bcrypt");
//var session = require('express-session');


const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
dialect: 'mysql', host: 'localhost'
});

router.get('/', (req,res)=>{
    if (req.session.user){
        res.send({loggedIn:'true', user:req.session.user})
    }else {
        res.send({loggedIn:'false'})
    }
})

router.post('/', async(req,res)=>{
    const {email,password} = req.body;
    let sql3 = `SELECT user_email, user_password, user_first_name From user WHERE user_email = '${email}'`
    const checkUser = await sequelize.query(sql3, {
                        type: sequelize.QueryTypes.SELECT
                        }).catch((err)=>{
                        console.log(err)
                        })
    console.log(checkUser)
    if (checkUser.length === 0) {
        return res.send({message:"User Not Found"})//modif send instead of json
    }else {
        bcrypt.compare(password, checkUser[0]['user_password'], async(err, data) => {
                if(err) {return res.send("error verifying credentials")}
                else if (data) 
                {   
                    req.session.user = checkUser;
                    console.log(req.session.user)

                    return res.send({message:"Login Successful"})
                    
                } else 
                {
                    return res.send({message:"Invalid credentials"})
                }
    })
}})

module.exports = router;