const Users = require('../models/User');
const config =  require('../config/main');
const CustomError = require('../customError');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const authenticate = params => {
    
	return Users.findOne({
		where: {
			email: params.email
		},
		raw: true
	}).then(user => {
		if (!user)
			throw new CustomError('Authentication failed. User not found.');
		// if(params.password != user.pass)
		// 	throw new CustomError('Authentication failed. Wrong password.');
		if (!bcrypt.compareSync(params.password || '', user.pass))
			throw new CustomError('Authentication failed. Wrong password.');

		const payload = { // Creating Payload
			email: user.email,
			id : user.id,
			firstName: user.firstName,
			lastName : user.lastName,
			role : user.role,
			loggedintime: new Date(),
			
		};

		var token = jwt.sign(payload, config.jwtSecret, { // Creating JWT Token
			expiresIn: config.tokenExpireTime
		});
		var response = { // Creating Response
			user: user,
			jwt: token
		}
		return response;
	});
}

module.exports = {
	authenticate
}
