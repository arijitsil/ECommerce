const Sequelize = require('sequelize');
var sequelize = require('../config/db');

const MenuItem = sequelize.define('menuitem', {
    item_name:{
        type     : Sequelize.STRING,
        allowNull: false,
    },
    item_description : {
        type : Sequelize.STRING,
        allowNull : false, 
    },
    item_type : {
        type : Sequelize.INTEGER, 
        allowNull : false,
        // 0 - Veg , 1 - NonVeg
    },
    item_image : {
        type : Sequelize.INTEGER,
        allowNull : true
    },
    item_unit_price : {
        type : Sequelize.DOUBLE,
        allowNull : false
    },
    menu_category_id : {
        type : Sequelize.BIGINT,
        allowNull : false,
    },
    id:{
        type: Sequelize.BIGINT,
        autoIncrement :true,
        primaryKey:true
    }
});

MenuItem.sync({alter : true})
  .then(() => console.log("Oh yeah! MenuItem table created successfully"))
  .catch(err => console.log(err));

module.exports = MenuItem;