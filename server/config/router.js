
var authController = require('../controllers/auth');
var userController = require('../controllers/user');
var authMiddleware = require('../middlewares/auth');
var storeMenuItemController = require('../controllers/storeMenuItem');
var storeController = require('../controllers/store');
var menuCategoryController = require('../controllers/menuCategory');
var menuController = require('../controllers/menu');
var menuItemController = require('../controllers/menuItem');
var orderController = require('../controllers/order');

const upload = require('../services/imageUpload');
const path = require('path');

module.exports.set = (app) => {

	// CUSTOMER LOGIN AND REGISTRATION
	 app.post('/api/registerUser', authController.registerUser);
	 app.post('/api/loginUser', authController.loginUser);

	// ADMIN LOGIN AND REGISTRATION

	 app.post('/api/login', authController.login);
	 app.post('/api/register', authController.register);


	// EDIT USER DETAILS
	 app.post('/api/user', authMiddleware.checkAuth,userController.editUser);
	app.get('/api/user/',authMiddleware.checkAuth, userController.getAllUsers);
	
	 // GET STORES LIST
	 app.get('/api/stores',storeController.getStoresList); // Get All Stores List

	  // ALL MENU CATEGORY OPERATIONS
	  app.get('/api/menuCategory',authMiddleware.checkAuth, menuCategoryController.getAllStore); // THIS IS FOR SHOWING ALL MENU FOR USER TO CHOOSE
	  app.post('/api/menuCategory',authMiddleware.checkAuth,upload.single('image'),menuCategoryController.createMenu);  // THIS IS FOR CREATING MENU
	  app.put('/api/menuCategory',authMiddleware.checkAuth,menuCategoryController.editMenu); // THIS IS FOR EDITING MENU NAME

	  // ALL MENU ITEM OPERATION
	  app.post('/api/menuitem',authMiddleware.checkAuth, menuItemController.addMenuItem);
	  app.get('/api/menuitem',authMiddleware.checkAuth, menuItemController.getMenuItem);
	  app.put('/api/menuitem', authMiddleware.checkAuth, menuItemController.editMenuItem);

	 // GET MENU AND MENUITEM BASED ON STORE
	 app.get('/api/stores/menu/',authMiddleware.checkAuth,menuController.getMeneFromStore); // Get Store Related Menu By Using Store Id
	 app.post('/api/stores/menu/',authMiddleware.checkAuth, menuController.addRemoveMenuToStore); // Add MENU TO Store By Using Store Id
	 //app.put('/api/stores/menu/',menuController.toggleAvailability); // Change Availability of Menu in a Store
	
	 // UPDATE STORE MENUITEM
	 app.post('/api/storeMenuItem',authMiddleware.checkAuth, storeMenuItemController.addRemoveMenuItem);


	 // GETORDERS

	 app.get('/api/orders',authMiddleware.checkAuth, orderController.getOrders);
	 app.post('/api/orders', authMiddleware.checkAuth,orderController.createOrders);
	

	

	 


	app.get('*', function(request, response) {
		console.log("here");
		response.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
	});
}
