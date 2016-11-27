var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true, 
		validate: {
			validator: function(name) {
				return name.length >= 2;
			},
			message: 'Name must be at least two characters long.'
		},
	},
}, {timestamps: true});

module.exports = mongoose.model('Customer', CustomerSchema);