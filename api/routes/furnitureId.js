var express = require('express');
const { Sequelize } = require('sequelize');
var router = express.Router();
const app = express();
require('dotenv').config();
const path = require('path');

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
  dialect: 'mysql', host: 'localhost'
});

router.get('/furniture/:id', (req, res, next) => {
    const id = (req.params.id)
    console.log(id);
    try {
        let sql = `SELECT furniture.furniture_Id, image.image_name, furniture.furniture_name, furniture.furniture_type, furniture.furniture_price, furniture.furniture_stock, furniture.furniture_description, furniture.furniture_dimension FROM furniture INNER JOIN image ON furniture.furniture_id = image.image_furniture_id WHERE furniture.furniture_id = ${id};`
        sequelize.query(sql)
        .then(([result]) => {
              result = CreateArrayOfImage(result)
              res.send(result)
              // let imageName = result.image_name[0]
              // res.sendFile(path.join(__dirname, 'public/images', imageName));
            })

  } catch (error) {  console.error('Impossible de se connecter, erreur suivante :', error); }
})

const CreateArrayOfImage = (object) => {
    let resultObject = object[0];
    for (let i = 1; i < object.length; i++){
        resultObject.image_name += ' ' +object[i].image_name;
    }
    resultObject.image_name = resultObject.image_name.split(' ');

    return resultObject;
}

module.exports = router;