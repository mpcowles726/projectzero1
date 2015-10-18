//REQUIREMENTS
var express = require('express');
var app = express();

//CONFIGURATIONS
app.set('view engine', 'ejs');
app.use(express.static('public'));

//ROUTES
app.get('/', function (req, res) {
	res.render ('index.ejs');
});















var server = app.listen(3000);


