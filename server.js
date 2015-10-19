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










//DATA
var footballData = [{
	team: "49ers",
	city: "San Francisco",
	stadium: "Levi's",
},
{
	team: "Packers",
	city: "Green Bay",
	stadium: "Lambeau Field"
},
{
	team: "Raiders",
	city: "Oakland",
	stadium: "O.co Coloseum"
},
{
	team: "Colts",
	city: "Indianappolis",
	stadium: "Lucas Oil Field"
},
{
	team: "Browns",
	city: "Cleveland",
	stadium: "FirstEnergy Stadium"
},
{
	team: "Steelers",
	city: "Pittsburg",
	stadium: "Heinz Field"
} ];



var server = app.listen(3000);


