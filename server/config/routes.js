var CustomerController = require('./../controllers/customers');
var ProductController = require('./../controllers/products');
var OrderController = require('./../controllers/orders');

var path = require('path');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../client/index.html'));
	});

	app.get('/customers', CustomerController.index);
	app.get('/customersShort', CustomerController.indexShort);
	app.post('/customers', CustomerController.create);
	app.delete('/customers/:id', CustomerController.remove);
	
	app.get('/products', ProductController.index);
	app.get('/productsShort', ProductController.indexShort);
	app.post('/products', ProductController.create);

	app.get('/orders', OrderController.index);
	app.get('/ordersShort', OrderController.indexShort);
	app.post('/orders', OrderController.create);
};	