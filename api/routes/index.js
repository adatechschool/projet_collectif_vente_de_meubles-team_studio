var express = require('express');
const { Sequelize } = require('sequelize');
var router = express.Router();
const app = express();
require('dotenv').config();
console.log(process.env)

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
  dialect: 'mysql', host: 'localhost'
});

/* GET home page. */
router.get('/furnitures' , (req, res) => {
  try {
        let sql = "SELECT * FROM furnitures"
        sequelize.query(sql)
        .then(([result]) => {
              console.log(result)
              res.send(result)})
  } catch (error) {  console.error('Impossible de se connecter, erreur suivante :', error); }
});

module.exports = router;
