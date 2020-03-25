var db = require('../models');

//developement only
exports.getInputs = function(req, res) {
	db.Input
		.find()
		.then(function(inputs) {
			res.json(inputs);
		})
		.catch(function(err) {
			res.send(err);
		});
};
//developement only

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

exports.getInput = function(req, res) {
	db.Input
		.findById(req.params.inputId)
		.then(function(foundInput) {
			res.json(foundInput);
		})
		.catch(function(err) {
			res.send(err);
		});
};

exports.editInput = function(req, res) {
	db.Input
		.findOneAndUpdate({ _id: req.params.inputId }, req.body, { new: true })
		.then(function(input) {
			res.json(input);
		})
		.catch(function(err) {
			res.send(err);
		});
};

//developement only
exports.deleteInput = function(req, res) {
	db.Input
		.remove({ _id: req.params.inputId })
		.then(function() {
			res.json({ message: 'Deleted' });
		})
		.catch(function(err) {
			res.send(err);
		});
};
//developement only

module.exports = exports;
