var express = require('express'),
	app = express();
var bodyParser = require('body-parser');

var todoRoutes = require('./routes/input');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.use('/api/urls', todoRoutes);

app.listen(3000, function() {
	console.log('App running on port 3000');
});
