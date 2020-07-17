const Sequelize = require('sequelize');
var sequelize = require('../config/db');

const Order = sequelize.define('order', {
    order_user_id:{
        type     : Sequelize.BIGINT,
        allowNull: false,
    },
    order_store_id : {
        type : Sequelize.BIGINT,
        allowNull : false
    },
    order_total_price : {
        type : Sequelize.DOUBLE,
        allowNull : false,   
    },
    id:{
        type: Sequelize.BIGINT,
        autoIncrement :true,
        primaryKey:true
    },
    order_date : {
        type : Sequelize.DATE,
        allowNull : false
    },
    order_status : {
        type : Sequelize.STRING,
        allowNull : false
    }
});

Order.sync({alter : true})
  .then(() => console.log("Oh yeah! Order table created successfully"))
  .catch(err => console.log(err));

module.exports = Order;