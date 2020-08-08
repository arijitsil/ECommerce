const Sequelize = require('sequelize');
var sequelize = require('../config/db');
const User = sequelize.define('users', {

    username:  {
        type     : Sequelize.STRING,
        allowNull: false,
    },
    pass: {
        type: Sequelize.STRING,
        allowNull : false
    },
    store_name : {
        type : Sequelize.STRING
    },
    email:{
       type: Sequelize.STRING,
       allowNull:false
    },
    phoneNumber :{
       type: Sequelize.STRING,
    },
    userStatus : {
        type: Sequelize.INTEGER,
        defaultValue : 1
    },  // 0- inactive, 1- active

    role: Sequelize.INTEGER, // 0-admin , 1 - storemanager

    id:{
        type: Sequelize.BIGINT,
        autoIncrement :true,
        primaryKey:true
    }


});



User.sync({alter : true})
  .then(() => console.log("Oh yeah! User table created successfully"))
  .catch(err => console.log(err));

module.exports = User;
