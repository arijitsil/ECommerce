require('dotenv').config();
module.exports = {
    'jwtSecret' : 'putsometopsecrethere',
    'HUBS_BUCKET' : 'fried_chicken_bucket',
    'databaseName' : 'fried_chicken_db',
   'db_userName' : 'postgres',
    'db_pass' : '123456',
   'db_host' : 'localhost',
    'db_port' : '5432',
    'port' : process.env.PORT || 5001,
    'tokenExpireTime' : '30d',
    'saltRounds': 2,
    'AWS_SECRET_ACCESS_KEY' : 'K4fBbS9UNRKZ3ml8tvUvguTTve/DBbAr87wSWVTn',
    'AWS_ACCESS_KEY_ID' :'AKIAIU4O5L4VUZF4LQYQ',
    'AWS_REGION' : 'ap-south-1'
}
