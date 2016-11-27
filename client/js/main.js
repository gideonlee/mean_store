var app = angular.module('App', ['ngRoute', 'ngFlash']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/_dashboard.html',
		controller: 'DashboardController',
	})
	.when('/products', {
		templateUrl: 'partials/_products.html',
		controller: 'ProductController',
	})
	.when('/orders', {
		templateUrl: 'partials/_orders.html',
		controller: 'OrderController',
	})
	.when('/customers', {
		templateUrl: 'partials/_customers.html',
		controller: 'CustomerController',
	})
	.when('/settings', {
		templateUrl: 'partials/_settings.html',
		controller: 'SettingController',
	})
	.otherwise({
		redirectTo: '/'
	});
});