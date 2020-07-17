const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const config = require('../config/main');

aws.config.update({
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  region: config.AWS_REGION
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
 
 try{
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false);
  }
 }catch(err){
   console.log(err);
 }

}

const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: 'public-read',
    s3,
    bucket: config.HUBS_BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'TESTING_METADATA'});
    },
    key: function (req, file, cb) {
      console.log(file);
      cb(null, file.originalname)
    }
  })
});

module.exports = upload;