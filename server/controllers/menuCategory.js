const menuCategoryService = require('../services/menuCategory')

function getAllStore(req,res){
    menuCategoryService.getAllStore(req).
    then(data =>{
        res.send(data);
    });
}

function editMenu(req,res){
    menuCategoryService.editMenu(req).
    then(data =>{
        res.send(data);
    });
}

function createMenu(req,res){
    menuCategoryService.createMenu(req).
    then(data =>{
        res.send(data);
    });
}


module.exports = {
    getAllStore,
    createMenu,
    editMenu

}