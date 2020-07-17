const AWS = require('aws-sdk');
AWS.config.update({
  secretAccessKey:'K4fBbS9UNRKZ3ml8tvUvguTTve/DBbAr87wSWVTn',
  accessKeyId: 'AKIAIU4O5L4VUZF4LQYQ',
  region: 'ap-south-1'
});
const s3 = new AWS.S3();

export default s3;