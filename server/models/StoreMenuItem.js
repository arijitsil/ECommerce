const Sequelize = require('sequelize');
var sequelize = require('../config/db');

const StoreMenuItem = sequelize.define('storeMenuItem', {
    menu_item_id:{
        type     : Sequelize.BIGINT,
        allowNull: false,
    },
    item_availablity : {
        type : Sequelize.INTEGER,
        allowNull : false,   
    },
    menu_category_id : {
        type : Sequelize.BIGINT,
        allowNull : false,
    },
    store_id : {
        type : Sequelize.BIGINT,
        allowNull : false,
    },
    menu_id : {
        type : Sequelize.BIGINT,
        allowNull : false,
    },
    id:{
        type: Sequelize.BIGINT,
        autoIncrement :true,
        primaryKey:true
    }
});

StoreMenuItem.sync({alter : true})
  .then(() => console.log("Oh yeah! StoreMenuItem table created successfully"))
  .catch(err => console.log(err));

module.exports = StoreMenuItem;