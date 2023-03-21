var express = require('express');
const { Sequelize } = require('sequelize');
var router = express.Router();
require('dotenv').config();
var bcrypt = require("bcrypt");

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
        return res.send({message:"User Not Found"})//modif send instead of json
    }else {
        bcrypt.compare(password, checkUser[0]['user_password'], async(err, data) => {
                let userId =""
                if(err) {return res.send("error verifying credentials")}
                else if (data) 
                {
                    console.log("Login Successful")

                    let sql =`SELECT user_id FROM user WHERE user_email = '${email}'`;
                    const user = await sequelize.query(sql, 
                        { type: sequelize.QueryTypes.SELECT });

                    console.log(user[0].user_id)

                        if (user.length > 0) {
                            userId += user[0].user_id;
                            req.session.userId = userId;
                            console.log(req.session.userId);
                    }

                    return  res.send({message:"Login Successful", user_id:userId})
                    
                } else 
                {
                    return res.send({message:"Invalid credentials"})
                }
    })
}})

module.exports = router;