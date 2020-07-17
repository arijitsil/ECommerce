var sequelize = require('../config/db');
const Users = require('../models/Customers');

const addUser = user => Users.create(user);
const getUserByLogin = email => Users.findOne({where: {email}});
const getUserProfile = id => Users.findOne({where:{id}});
// editing the customers
const editUser = async(req) => {

    const body = req.body;
    if(body && body.id){
        await Users.findOne({
            where : {
                id : body.id
            }
        }).then(async user=> {
            user.update({
                firstName : body.firstName,
                lastName : body.lastName,
                home_city : body.homecity,
                phoneNumber : body.contactNumber
            },{
                where : {
                    id : user.dataValues.id    
                }
            })
        })
        return {"message":"Edited Succesfully"};
    }else{
        return {"message" : "error"};
    }
   
}

async function getUserData (criteria) {

    return await Users.findOne({
        where: criteria, // conditions
    });
}


module.exports = {
	addUser,
	getUserByLogin,
	getUserProfile,
    getUserData,
    editUser
}
