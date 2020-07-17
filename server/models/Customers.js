const Sequelize = require('sequelize');
var sequelize = require('../config/db');
const Customer = sequelize.define('customers', {

    firstName:  {
        type     : Sequelize.STRING,
        allowNull: false,

    },
    lastName:  {
        type     : Sequelize.STRING,
        allowNull: false,
    },
    userName:  {
        type : Sequelize.STRING,
    },
    pass: {
        type: Sequelize.STRING,
        allowNull : false
    },
    home_city : {
        type : Sequelize.STRING
    },
    gender : {
        type: Sequelize.INTEGER,  //  1- male, 2- female , 3 - other
    },
    email:{
       type: Sequelize.STRING,
       allowNull:false
    },
    phoneNumber :{
       type: Sequelize.STRING,
    },

    socialId : {type: Sequelize.STRING},

    socialType : {type: Sequelize.INTEGER},  // 1- facebook, 2- google

    userStatus : {
        type: Sequelize.INTEGER,
        defaultValue : 1
    },  // 0- block, 1- active

    role: Sequelize.INTEGER, // 0-admin , 1 - user

    id:{
        type: Sequelize.BIGINT,
        autoIncrement :true,
        primaryKey:true
    }


});



Customer.sync({alter : true})
  .then(() => console.log("Oh yeah! Customer table created successfully"))
  .catch(err => console.log(err));

module.exports = Customer;
