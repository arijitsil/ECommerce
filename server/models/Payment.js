const Sequelize = require('sequelize');
var sequelize = require('../config/db');

const Payment = sequelize.define('Payment', {
    order_user_id:{
        type     : Sequelize.BIGINT,
        allowNull: false,
    },
    order_store_id : {
        type : Sequelize.BIGINT,
        allowNull : false
    },
    total_payment : {
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
    payment_status : {
        type : Sequelize.STRING,
        allowNull : false
    }
});

Payment.sync({alter : true})
  .then(() => console.log("Oh yeah! Payment table created successfully"))
  .catch(err => console.log(err));

module.exports = Payment;