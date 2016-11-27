var Customer = require('./../models/customer');
var Product = require('./../models/product');
var Order = require('./../models/order');

module.exports = {
	index: function(req, res) {
		Order.find({}).populate('_customer').populate('_product').exec(function(err, allOrders) {
			if (err) {
				res.json(err);
			} else {
				res.json(allOrders);
			}
		});
	},
	indexShort: function(req, res) {
		Order.find({}).populate('_customer').populate('_product').limit(3).exec(function(err, orders) {
			if (err) {
				res.json(err);
			} else {
				res.json(orders);
			}
		});
	},
	create: function(req, res) {
		if (req.body.customer && req.body.product && req.body.quantity > 0) {
			Product.findOne({name: req.body.product}, function(err, selectedProduct) {
				if (selectedProduct.quantity >= req.body.quantity) {
					selectedProduct.quantity -= req.body.quantity;
					var order = new Order(req.body);
					order._product = selectedProduct._id;
					Customer.findOne({name: req.body.customer}, function(err, selectedCustomer) {
						order._customer = selectedCustomer._id;
						selectedProduct.save(function(err) {
							selectedCustomer.save(function(err) {
								order.save(function(err) {
									order.save(function(err) {
										if (err) {
											res.json(err);
										} else {
											res.json(true);
										}
									});
								});
							});
						});
					});
				} else {
					res.status(400);
					res.json({errors: 'Not enough inventory to complete order.', quantity: selectedProduct.quantity});
				}
			});
		}
	},
};