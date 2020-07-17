const Sequelize = require('sequelize');
var sequelize = require('../config/db');

const Menu = sequelize.define('menu', {
    menu_name:{
        type     : Sequelize.STRING,
        allowNull: false,
    },
    menu_avilability : {
        type : Sequelize.INTEGER,
        allowNull : false,   
    },
    store_id : {
        type :Sequelize.BIGINT,
        allowNull : false
    },
    menu_category_id: {
        type : Sequelize.BIGINT,
        allowNull : false
    },
    id:{
        type: Sequelize.BIGINT,
        autoIncrement :true,
        primaryKey:true
    }
});

Menu.sync({alter : true})
  .then(() => console.log("Oh yeah! Menu table created successfully"))
  .catch(err => console.log(err));

module.exports = Menu;