const Sequelize = require('sequelize');
var sequelize = require('../config/db');

const OperatingHours = sequelize.define('operatinghours', {
    closes:  {
        type     : Sequelize.TIME,
        allowNull: false
    },
    opens : {
        type: Sequelize.TIME,
        allowNull : false
    },
    dayOfWeek : {
        type : Sequelize.STRING,
        allowNull : false
    },
    restaurant_id : {
        type : Sequelize.BIGINT,
        allowNull : false
    },
    valid_from : {
        type : Sequelize.DATE,
        allowNull : false
    },
    valid_through : {
        type: Sequelize.DATE
    },
    break_open : {
        type     : Sequelize.TIME,
        allowNull: true
    },
    break_closes : {
        type: Sequelize.TIME,
        allowNull : true
    }


});

OperatingHours.sync()
  .then(() => console.log("Oh yeah! OperatingHours table created successfully"))
  .catch(err => console.log(err));

module.exports = OperatingHours;