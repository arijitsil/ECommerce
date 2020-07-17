const storeService = require('../services/store')

function addRemoveMenuItem(req,res){
    storeService.addRemoveMenuItem(req).
    then(data =>{
        res.send(data);
    });
}

module.exports = {
    addRemoveMenuItem
}