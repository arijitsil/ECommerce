const config =  require('../config/main');
const constants =  require('../config/constants');
const jwt = require('jsonwebtoken');
const Customer = require('../models/Customers');
const bcrypt = require('bcrypt-nodejs');
const authService = require('../services/auth');
const userService = require('../services/user');
const loginvalidator = require('../validator/login')
const registerValidator = require('../validator/register');
const Sequelize = require('sequelize')
function login(req,res){
   ``
    return authService.authenticate(req.body)
	.then(response => {
		res.send({
			success: true,
			data: {user: response.user,token:response.jwt }
		});
	})
	.catch(err => {
		console.log(err);
		if (err.type === 'custom'){
			return res.send({
				success: false,
				message: err.message
			});
		}
		return res.send({
			success: false,
			message: 'Authentication failed. Unexpected Error.'
		});
	});
}

function register(req, res){
	return userService.getUserByLogin(req.body.email || '')
	.then(exists => {

		if (exists){
			return res.send({
				success: false,
				message: 'Registration failed. User with this email already registered.'
			});
		}

		var user = {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
            pass: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(config.saltRounds)),
			email : req.body.email,
			role : 0
		}
		
		return userService.addUser(user)
		.then(() => {
			res.send({success: true})
		});
	})
	.catch(err=>{
		if(err){
			return res.status(400).json({
				success: false,
				message: 'Some Error during the Database Transaction.',
				error : err
			})
		}
	});
}

async  function registerUser(req, res){


	try {
        if(req.body.email){

            let result = await userService.getUserData({email : req.body.email,role : 1});
            if(result) return res.status(400).json(constants.STATUS_MSG.ERROR.ALREADY_EXIST)
        }

        if(req.body.userName){
            let result = await userService.getUserData({userName : req.body.userName,role : 1});
            if(result) return res.status(400).json(constants.STATUS_MSG.ERROR.USERNAME_EXIST)
        }

        if(req.body.phoneNumber){
            let result = await userService.getUserData({phoneNumber : req.body.phoneNumber,role : 1});
            if(result) return res.status(400).json(constants.STATUS_MSG.ERROR.PHONE_ALREADY_EXIST)
        }

        if(req.body.password)
            req.body.pass = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(config.saltRounds));

		req.body.role = 1;  // for user
        const buildData = Customer.build(req.body);
		let data = await buildData.save();
		if(req.body.socialType && (req.body.socialType == "1" || req.body.socialType == "2")){
			data.dataValues.token = await jwt.sign(data.dataValues, config.jwtSecret, {
				expiresIn: config.tokenExpireTime
			})
		}
		var userId = data.dataValues.id;
		

        delete data.dataValues.pass;
        delete data.dataValues.role;

        return res.send({success : true , data,message : 'SignUp Successfully'});

    }
    catch (e) {
		throw  e
    }
}

async  function loginUser(req, res){


	try {

		let criteria = { role : 1};

        if(req.body.email && req.body.loginBy === '1'){
        	criteria.email = req.body.email;
        }
        else criteria.socialId = req.body.socialId;

        let result = await userService.getUserData(criteria);
        if(result) {
        	result = result.dataValues;
        	if(result.userStatus === 0)
                return res.status(400).json(constants.STATUS_MSG.ERROR.BLOCKED);
			else if (req.body.password && !bcrypt.compareSync(req.body.password, result.pass)){
                return res.status(400).json(constants.STATUS_MSG.ERROR.INVALID_PASSWORD)
			}
			else {
				
                result.token = await jwt.sign(result, config.jwtSecret, {
                    expiresIn: config.tokenExpireTime
                });

                delete result.pass;
                return res.send({success : true ,data:result,message : 'LogIn Successfully'});
			}
        }
        else return res.status(400).json(constants.STATUS_MSG.ERROR.NOT_REGISTER)

    }
    catch (e) {
		throw  e
    }
}





module.exports = {
	login,
	register,

    // User side
    registerUser,
    loginUser
}
