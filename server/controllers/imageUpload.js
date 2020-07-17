

const upload = require('../services/imageUpload');
const singleUpload = upload.single('image')
const multipleUpload = upload.array('images',5)
var imageUpload = function(req, res) {
    singleUpload(req, res, function(err) {
      if (err) {
        return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}]});
      }
  
      return res.json({'imageUrl': req.file.location});
});

}

const imagesUpload = function(req,res){
  
  multipleUpload(req,res,function(err){
    if(err){
      return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}]});
    }
    consoles(req);
    return res.json({'imageUrl': req.file.location});
  });
}

module.exports = {
    imageUpload,
    imagesUpload
}