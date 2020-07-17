const config = require('./main');
const Sequelize = require('sequelize');
console.log(config.db_userName)
var sequelize = new Sequelize(config.databaseName, config.db_userName, config.db_pass, {
    // gimme postgres, please!
    host: config.db_host,
    port: config.db_port,
    dialect: 'postgres',
    dialectOptions : {
      ssl : true
    }
  });


module.exports = sequelize;
