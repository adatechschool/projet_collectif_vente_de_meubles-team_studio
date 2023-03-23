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

router.post('/order/:user_id', async (req, res) => {

    const user_id = parseInt(req.params.user_id);
    console.log(user_id);
    // res.send(user_id)

    const { orderId, orderDate, orderTotalPrice } = req.body;

    let sql = `INSERT INTO furniture_project.order (order_id, order_date, order_total_price, order_user_id) VALUES(${orderId}, '${orderDate}', ${orderTotalPrice}, ${user_id})`;

    await sequelize.query(sql, {
        type: sequelize.QueryTypes.INSERT
    }).then(() => {
        res.json({ message: "Order added." })
    }).catch((err) => {
        console.log(err)
        res.json({ message: "error adding order" })
    })



});

module.exports = router;