const Sequelize = require('sequelize');
var sequelize = require('../config/db');

const OrderItem = sequelize.define('orderitem', {
    item_name:{
        type     : Sequelize.STRING,
        allowNull: false,
    },
    item_unit_price : {
        type : Sequelize.DOUBLE,
        allowNull : false
    },
    item_quantity : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    order_id : {
        type : Sequelize.BIGINT,
        allowNull : true
    },
    id:{
        type: Sequelize.BIGINT,
        autoIncrement :true,
        primaryKey:true
    }
});

OrderItem.sync({alter : true})
  .then(() => console.log("Oh yeah! OrderItem table created successfully"))
  .catch(err => console.log(err));

module.exports = OrderItem;