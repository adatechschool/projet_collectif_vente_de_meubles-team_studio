var express = require('express');
const { Sequelize } = require('sequelize');
var router = express.Router();
require('dotenv').config();
const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    dialect: 'mysql', host: 'localhost'
  });
 router.get('/furnitures/:type', (req, res, next) =>{
    const type = (req.params.type)
    // console.log("type", type);
    try {
        let sql = `SELECT furniture.furniture_Id, image.image_name, furniture.furniture_name, furniture.furniture_type, furniture.furniture_price, furniture.furniture_stock, furniture.furniture_description, furniture.furniture_dimension FROM furniture INNER JOIN image ON furniture.furniture_id = image.image_furniture_id WHERE furniture.furniture_type = "${type}";`
        sequelize.query(sql)
        .then(([result])=> {
            result = createArrayOfImagesFromResultJsonObject(result);
            // console.log(result)
            res.send(result)
        })
    } catch (error) {  console.error('Impossible de se connecter, erreur suivante :', error); }
  })
  const createArrayOfImagesFromResultJsonObject = (object) => {
    let result = [];
    result.push(object[0])
    for (let i = 1; i < object.length; i++){
        if (object[i].furniture_Id !== object[i - 1].furniture_Id){
            result.push(object[i])
        } else if (object[i].furniture_Id === object[i - 1].furniture_Id){
            for (j in result){
                if (object[i].furniture_Id === result[j].furniture_Id){
                    result[j].image_name += ' ' + (object[i].image_name);
                }
            }
        }
    }
    for (j in result){
        result[j].image_name = result[j].image_name.split(' ');
    }
    return result;
  }
  module.exports = router;