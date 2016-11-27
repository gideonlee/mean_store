var Customer = require('./../models/customer');

module.exports = {
	index: function(req, res) {
		Customer.find({}, function(err, allCustomers) {
			if (err) {
				res.json(err);
			} else {
				res.json(allCustomers);
			}
		});
	},
	indexShort: function(req, res) {
		Customer.find({}).limit(3).exec(function(err, customers) {
			if (err) {
				res.json(err);
			} else {
				res.json(customers);
			}
		});
	},
	create: function(req, res) {
		var customer = new Customer(req.body);

		customer.save(function(err, newCustomer) {
			if (err) {
				res.status(400);
				res.json(err);
			} else {
				res.json(newCustomer);
			}
		});
	},
	remove: function(req, res) {
		console.log(req.params);
		Customer.remove({_id: req.params.id}, function(err, deletedUser) {
			if (err) {
				res.json(err);
			} else {
				res.json(deletedUser);
			}
		});
	},
};