var db = require('../models');

exports.createInput = function(req, res) {
	db.Input
		.create(req.body)
		.then(function(newInput) {
			res.json(newInput);
		})
		.catch(function(err) {
			res.send(err);
		});
};

module.exports = exports;
