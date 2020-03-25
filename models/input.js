var mongoose = require('mongoose');
shortid = require('shortid');

var inputSchema = new mongoose.Schema({
	original: {
		type: String,
		required: 'must have input'
	},
	_id: {
		type: String,
		default: shortid.generate
	},
	new: {
		type: String,
		default: ''
	}
});

var Input = mongoose.model('Input', inputSchema);

module.exports = Input;
