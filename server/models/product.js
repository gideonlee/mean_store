var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	name: {
		type: String, 
		required: true,
		unique: true,
		validate: {
			validator: function(name) {
				return name.length > 2;
			},
			message: 'Name must be at least 3 characters long.'
		}
	},
	url: {
		type: String 
	},
	description: {
		type: String, 
		required: true,
		validate: {
			validator: function(description) {
				return description.length >= 2;
			},
			message: 'Description must be at least 2 characters long'
		}
	},
	quantity: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('Product', ProductSchema);