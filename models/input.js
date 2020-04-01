var mongoose = require('mongoose');
arandomstring = require('a-random-string');

var inputSchema = new mongoose.Schema({
	original: {
		type: String,
		required: 'must have input'
	},
	_id: {
		type: String,
		default: arandomstring.generate
	},
	new: {
		type: String,
		default: ''
	}
});

var Input = mongoose.model('Input', inputSchema);

module.exports = Input;
