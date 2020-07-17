const Sequelize = require('sequelize');
var sequelize = require('../config/db');

const MenuCategory = sequelize.define('menu', {
    menu_name:{
        type     : Sequelize.STRING,
        allowNull: false,
    },
    menu_avilability : {
        type : Sequelize.INTEGER,
        allowNull : false,   
    },
    id:{
        type: Sequelize.BIGINT,
        autoIncrement :true,
        primaryKey:true
    }
});

MenuCategory.sync({alter : true})
  .then(() => console.log("Oh yeah! MenuCategory table created successfully"))
  .catch(err => console.log(err));

module.exports = MenuCategory;