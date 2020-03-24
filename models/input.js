var mongoose = require('mongoose');

var inputSchema = new mongoose.Schema({
	original: {
		type: String,
		required: 'must have input'
	},
	shortId: {
		type: String,
		default: '1'
	},
	new: {
		type: String,
		default: 'original + / + shortId'
	}
});

var Input = mongoose.model('Input', inputSchema);

module.exports = Input;
