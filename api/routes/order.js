var express = require('express');
const { Sequelize } = require('sequelize');
var router = express.Router();
const app = express();
require('dotenv').config();

// Database connection credentials:
const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    dialect: 'mysql', host: 'localhost'
});


// router.post('/user/:user_id/order', (req, res, next) => {
//     const user_id = parseInt(req.params.user_id);
//     console.log(user_id);
//     try {
//         let sql = `INSERT INTO 'order' (order_id, order_date, order_user_id) VALUES (NULL, NOW(), ${user_id});`;
//         sequelize.query(sql, {
//             type: sequelize.QueryTypes.INSERT
//         }).then(data => {
//             if (data) {
//                 console.log('Order added.')
//             }
//         })
//     } catch (error) { console.error('Impossible de se connecter, erreur suivante:', error); }
// });

module.exports = router;