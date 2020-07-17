const jwt = require('jsonwebtoken');
const config =  require('../config/main');

const checkAuth = (req, res, next) => {
	console.log(req.body);
	let token = req.headers['x-access-token'] || req.headers['authorization']; 
	// Express headers are auto converted to lowercase
	console.log("token")
	if(token === undefined){
		return res.status(403).send({ auth: false, message: 'No token is provided.' });
	}
	if (token.startsWith('Bearer ')) {
		// Remove Bearer from string
		token = token.slice(7, token.length).trimLeft();
	}
  	
	if (!token)
		return res.status(403).send({ auth: false, message: 'No token is provided.' });

	jwt.verify(token, config.jwtSecret, (err, decoded) => {
		if (err){
			console.log(err)
			return res.status(500).send({ auth: false, message: 'Failed to authenticate token.', error : err});
		}
			

		req.user = {
				user : decoded.user,
				user_name: decoded.user_name,
				id: decoded.id
			};
		next();
	});
}



module.exports = {
	checkAuth
}