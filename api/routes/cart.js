var express = require('express');
const { Sequelize } = require('sequelize');
var router = express.Router();
// const app = express();
require('dotenv').config();
const bodyParser = require('body-parser')

// Database connection credentials:
const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    dialect: 'mysql', host: 'localhost'
});

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/cart/:order_id', async (req, res) => {

    const order_id = parseInt(req.params.order_id);
    console.log(order_id);
    const furniture_id = parseInt(req.params.furniture_id);
    console.log(furniture_id);
    // res.send(user_id)

    //const { orderId, furnitureId } = req.body;

    let sql = `INSERT INTO furniture_project.link_fo (link_fo_order_id, link_fo_furniture_id) VALUES(${order_id}, ${furniture_id})`;

    await sequelize.query(sql, {
        type: sequelize.QueryTypes.INSERT
    }).then(() => {
        res.json({ message: "Furniture added." })
    }).catch((err) => {
        console.log(err)
        res.json({ message: "error adding furniture" })
    })



});

module.exports = router;