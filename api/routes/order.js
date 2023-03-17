var express = require('express');
const { Sequelize } = require('sequelize');
var router = express.Router();
const app = express();
require('dotenv').config();
console.log(process.env)

// Database connection credentials:
const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    dialect: 'mysql', host: 'localhost'
});

router.post('/', (req, res, next) => {
    
    // try {
    //     let sql = "SELECT furniture.furniture_Id, image.image_name, furniture.furniture_type, furniture.furniture_price FROM furniture INNER JOIN image ON furniture.furniture_id = image.image_furniture_id;"
    //     sequelize.query(sql)
    //     .then(([result]) => {
    //       result = createArrayOfImagesFromResultJsonObject(result);
    //           console.log(result)
    //           res.send(result)})
    // } catch (error) {  console.error('Impossible de se connecter, erreur suivante :', error); }
    res.send('The order route is working');
});

module.exports = router;