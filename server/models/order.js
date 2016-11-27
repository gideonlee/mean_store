var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
	_customer: { 
		type: Schema.Types.ObjectId,
		ref: 'Customer'
	},
	_product: {
		type: Schema.Types.ObjectId,
		ref: 'Product'
	},
	quantity: Number
}, {timestamps: true});

module.exports = mongoose.model('Order', OrderSchema);