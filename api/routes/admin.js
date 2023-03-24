
var express = require('express');
const { Sequelize } = require('sequelize');
var router = express.Router();  


const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    dialect: 'mysql', host: 'localhost'
    });

    router.post("/", (request, response) => {
    const furnituresDetails = request.body;
    const { furniture_name, furniture_type, furniture_price, furniture_stock, furniture_description, furniture_dimension} = furnituresDetails;
  
    const adminRouter = `
      INSERT INTO furniture
          ( furniture_name, furniture_type, furniture_price, furniture_stock, furniture_description, furniture_dimension)
      VALUES
          ( '${furniture_name}', '${furniture_type}', '${furniture_price}', '${furniture_stock}', '${furniture_description}', '${furniture_dimension}' );`;
          
           return sequelize.query(adminRouter,
            {
            type: sequelize.QueryTypes.INSERT
            }).then(()=>{
              response.json({message:"Done"})

            }).catch((err) => {
              console.log(err)
              res.json({ message: "Failed" })
            })
        });

            

  module.exports = router;
