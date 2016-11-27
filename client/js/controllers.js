app.controller('DashboardController', ['$scope', 'CustomerFactory', 'ProductFactory', 'OrderFactory', '$location', function($scope, CustomerFactory, ProductFactory, OrderFactory, $location) {
		ProductFactory.indexShort().then(function(res) {
			$scope.products = res.data; 
		});

		CustomerFactory.indexShort().then(function(res) {
			$scope.customers = res.data;
		});

		OrderFactory.indexShort().then(function(res) {
			$scope.orders = res.data; 
		});
}]);

app.controller('ProductController', ['$scope', 'ProductFactory', function($scope, ProductFactory) {
	ProductFactory.index().then(function(res) {
		$scope.products = res.data; 
	});

	$scope.create = function() {
		ProductFactory.create($scope.product).then(function(res) {
			ProductFactory.index().then(function(res) {
				$scope.products = res.data; 
			});
			$scope.product = '';
		}).catch(function(res) {
			console.log(res);
		});
	};

}]);

app.controller('OrderController', ['$scope', 'ProductFactory', 'CustomerFactory', 'OrderFactory', 'Flash', function($scope, ProductFactory, CustomerFactory, OrderFactory, Flash) {
	CustomerFactory.index().then(function(res) {
		$scope.customers = res.data;
	});

	ProductFactory.index().then(function(res) {
		$scope.products = res.data; 
	});

	OrderFactory.index().then(function(res) {
		$scope.orders = res.data; 
	});

	$scope.createOrder = function() {
		OrderFactory.create($scope.order).then(function(res) {
			OrderFactory.index().then(function(res) {
				$scope.orders = res.data; 
			});
		}).catch(function(res) {
			var message = res.data.errors + ' Quantity: ' + res.data.quantity;
			Flash.create('danger', message);
		});
	};

}]);

app.controller('CustomerController', ['$scope', 'CustomerFactory', 'Flash', function($scope, CustomerFactory, Flash) {

	CustomerFactory.index().then(function(res) {
		$scope.customers = res.data; 
	});

	$scope.create = function() {
		CustomerFactory.create($scope.customer).then(function(res) {
			$scope.customer = '';
			CustomerFactory.index().then(function(res) {
				$scope.customers = res.data; 
			});
		}).catch(function(res) {
			if (res.data.errmsg) {
				var message = 'Cannot create duplicate user.';
			} else {
				var message = res.data.errors.name.message;
			}
			Flash.create('danger', message);
		});
	};

	$scope.remove = function(id) {
		CustomerFactory.remove(id).then(function(res) {
			CustomerFactory.index().then(function(res) {
				$scope.customers = res.data; 
			});
			Flash.create('success', 'User Deleted');
		});
	};
}]);

app.controller('SettingController', ['$scope', function($scope) {
	
}]);
