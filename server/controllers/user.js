const userService = require('../services/user');

function getUserProfile(req, res){
	userService.getUserProfile(req.params.id)
	.then(data => res.send(data));
}

function editUser(req,res){
	userService.editUser(req).then(data=> {
		if(data.mesage === "error"){
			res.status(500).send(data)
		}else{
			res.send(data);
		}
	}).catch(error => {
        res.status(500).send(error)
    });
}

function getAllUsers(req,res){
	userService.getAllUsers(req).then(data=> {
		if(data.mesage === "error"){
			res.status(500).send(data)
		}else{
			res.send(data);
		}
	}).catch(error => {
        res.status(500).send(error)
    });
}


module.exports = {
	getUserProfile,
	editUser,
	getAllUsers

};
