const menuItemService = require('../services/menuItem')

function addMenuItem(req,res){
    menuItemService.addMenuItem(req).
    then(data =>{
        res.send(data);
    });
}

function getMenuItem(req,res){
    menuItemService.getMenuItem(req).
    then(data =>{
        res.send(data);
    });
}

function editMenuItem(req,res){
    menuItemService.editMenuItem(req).
    then(data =>{
        res.send(data);
    });
}


module.exports = {
    addMenuItem,
    getMenuItem,
    editMenuItem

}