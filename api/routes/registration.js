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

router.post('/', async (req, res) => {
    // the data is retrieved from the request body
    const { email, password, firstname, lastname, address } = req.body;

    if (!email || !password || !firstname || !lastname || !address) {
        return res.json({ message: "Please fill all the fields" })
    } else {
        // Check if the user_email already exists in the DB
        let sql1 = `SELECT user_email FROM user WHERE user_email= '${email}' ;`;
        // wait for the query to be resolved (using await)
        const findUser = await sequelize.query(sql1, {
            type: sequelize.QueryTypes.SELECT
        }).catch((err) => {
            console.log(err)
        })

        console.log(findUser)
        // if user_email exists
        if (findUser.length > 0) {
            return res.json({ message: "Email Already exists, Go to Sign In " })
        }
        //findUser returns an array, if empty insert into DB
        else if (findUser.length === 0) {
            //hashing password using bcrypt
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if (err) {
                    return res.json({ message: 'could not hash the password' })
                } else if (hash) {
                    let sql2 = `INSERT INTO user (user_email , user_password, user_first_name, user_last_name, user_address) VALUES('${email}','${hash}','${firstname}','${lastname}','${address}')`
                    return sequelize.query(sql2,
                        {
                            type: sequelize.QueryTypes.INSERT
                        })
                        .then(() => {
                            res.json({ message: "user created" })
                        })
                        .catch((err) => {
                            console.log(err)
                            res.json({ message: "error creating user" })
                        })
                }
            })
        }
    }
})

module.exports = router;
