app.factory('CustomerFactory', ['$http', function($http) {
	var factory = {};

	factory.index = function() {
		return $http.get('/customers');
	};

	factory.indexShort = function() {
		return $http.get('/customersShort');
	};	

	factory.create = function(customer) {
		return $http.post('/customers', customer);
	};

	factory.remove = function(id) {
		return $http.delete('/customers/'+id);
	};

	return factory;
}]);

app.factory('ProductFactory', ['$http', function($http) {
	var factory = {};

	factory.index = function() {
		return $http.get('/products');
	};

	factory.indexShort = function() {
		return $http.get('/productsShort');
	};

	factory.create = function(product) {
		return $http.post('/products', product);
	};

	return factory;
}]);

app.factory('OrderFactory', ['$http', function($http) {
	var factory = {};

	factory.index = function() {
		return $http.get('/orders');
	};

	factory.indexShort = function() {
		return $http.get('/ordersShort');
	};

	factory.create = function(order) {
		return $http.post('/orders', order);
	};
	
	return factory;
}]);