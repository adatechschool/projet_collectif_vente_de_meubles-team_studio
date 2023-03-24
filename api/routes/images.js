var express = require('express');
const { Sequelize } = require('sequelize');
var router = express.Router();
const app = express();
require('dotenv').config();
<<<<<<< HEAD
//console.log(process.env)
=======
// console.log(process.env)
>>>>>>> origin/master

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
  dialect: 'mysql', host: 'localhost'
});

app.get('/images/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    res.sendFile(path.join(__dirname, 'public/images', imageName));
});

module.exports = router;