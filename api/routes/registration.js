var express = require('express');
const { Sequelize } = require('sequelize');
var router = express.Router();
require('dotenv').config();
var bcrypt = require("bcrypt");
const saltRounds = 10;

//establish connection with DB
const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
dialect: 'mysql', host: 'localhost'
});

router.post('/', 
async(req, res) => {
    // the data is retrieved from the request body
    const {email,password,firstname,lastname,address} = req.body;

    if (!email|| !password|| !firstname || !lastname || !address){
        return res.send({message:"Please Fill All The Fields"})
    }else {
        // Check if the user_email already exists in the DB
        let sql1 =`SELECT user_email FROM user WHERE user_email= '${email}' ;`;
        // wait for the query to be resolved (using await)
        const findUser = await sequelize.query(sql1,  {
                type: sequelize.QueryTypes.SELECT
                }).catch((err)=>{
                    console.log(err)
                })

        console.log(findUser)
        // if user_email exists
        if (findUser.length > 0){
            return res.send({message:"Email Already Exists, Go To Sign In "})
        }
        //findUser returns an array, if empty insert into DB
        else if (findUser.length === 0 ) {
        //hashing password using bcrypt
            bcrypt.hash(password, saltRounds,(err, hash) => 
            {
                if(err){
                    return res.send({message:'Could Not Hash The Password'},err)
                } else if (hash){
                    let sql2 = `INSERT INTO user (user_email , user_password, user_first_name, user_last_name, user_address) VALUES('${email}','${hash}','${firstname}','${lastname}','${address}')`
                    return sequelize.query(sql2, 
                        {
                        type: sequelize.QueryTypes.INSERT
                        })
                        .then(() =>{
                            res.send({message:"User Created Successfully"})
                        })
                        .catch((err) =>{
                            console.log(err)
                            res.send({message:"Error Creating User"},err)
                        })
                    }
                })
    }}
})

module.exports = router;
