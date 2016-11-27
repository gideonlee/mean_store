var Product = require('./../models/product');

module.exports = {
	index: function(req, res) {
		Product.find({}, function(err, allProducts) {
			if (err) {
				res.status(400);
				res.json(err);
			} else {
				res.json(allProducts);
			}
		});
	},
	indexShort: function(req, res) {
		Product.find({}).limit(5).exec(function(err, products) {
			res.json(products);
		});
	},
	create: function(req, res) {
		var product = new Product(req.body);
		product.save(function(err) {
			if (err) {
				res.status(400);
				res.json(err);
			} else {
				res.json(true);
			}
		});
	},
};