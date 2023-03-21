var express = require('express');
const { Sequelize } = require('sequelize');
var router = express.Router();
const app = express();
require('dotenv').config();
console.log(process.env)

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
  dialect: 'mysql', host: 'localhost'
});

var sessionChecker = function (req, res, next) {
  if (req.session.userId && req.cookies.sessionId) {
    next();
  } else {
    // La session n'existe pas, on renvoie une réponse JSON
    res.json({ message: "Session not found" });
  }    
};

/* GET home page. */
router.get('/' , sessionChecker, (req, res, next) => {
    try {
        let sql = "SELECT furniture.furniture_Id, image.image_name, furniture.furniture_name, furniture.furniture_type, furniture.furniture_price, furniture.furniture_stock, furniture.furniture_description, furniture.furniture_dimension FROM furniture INNER JOIN image ON furniture.furniture_id = image.image_furniture_id;"
        sequelize.query(sql)
        .then(([result]) => {
          result = createArrayOfImagesFromResultJsonObject(result);
              console.log(result)
              res.send(result)})
  } catch (error) {  console.error('Impossible de se connecter, erreur suivante :', error); }
});

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

