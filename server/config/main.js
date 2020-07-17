require('dotenv').config();
module.exports = {
    'jwtSecret' : 'putsometopsecrethere',
    'HUBS_BUCKET' : 'happyhourshubs',
    'databaseName' : 'dahbv7hn9k9eo2',
   'db_userName' : 'ud98phksqf9pib',
    'db_pass' : 'p79f1a956631991985b197c5070e59f750e82f481360b72afce83e8010f4c0531',
   'db_host' : 'ec2-52-204-158-147.compute-1.amazonaws.com',
    'db_port' : '5432',
    'port' : process.env.PORT || 5000,
    'tokenExpireTime' : '30d',
    'saltRounds': 2,
    'AWS_SECRET_ACCESS_KEY' : 'K4fBbS9UNRKZ3ml8tvUvguTTve/DBbAr87wSWVTn',
    'AWS_ACCESS_KEY_ID' :'AKIAIU4O5L4VUZF4LQYQ',
    'AWS_REGION' : 'ap-south-1'
}
