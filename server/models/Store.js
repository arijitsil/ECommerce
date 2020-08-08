const Sequelize = require('sequelize');
var sequelize = require('../config/db');

const Store = sequelize.define('store', {
    store_name:{
        type     : Sequelize.STRING,
        allowNull: false,
    },
    store_address : {
        type : Sequelize.STRING,
        allowNull : false
    },
    store_phoneNumber : {
        type : Sequelize.STRING,
        allowNull : false 
    }, 
    id:{
        type: Sequelize.BIGINT,
        autoIncrement :true,
        primaryKey:true
    },
    store_start_time : {
        type : Sequelize.TIME,
        allowNull : false
    },

    store_end_time : {
        type : Sequelize.TIME,
        allowNull : false
    },
    store_image : {
        type : Sequelize.STRING,
        
    }
});

Store.sync({alter : true})
  .then(() => console.log("Oh yeah! Store table created successfully"))
  .catch(err => console.log(err));

module.exports = Store;