var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose
	.connect('mongodb://localhost', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('MongoDB Connected...'))
	.catch((err) => console.log(err));

mongoose.Promise = Promise;

module.exports.Input = require('./input');
