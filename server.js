//REQUIREMENTS
var express = require('express');
var app = express();

//CONFIGURATIONS
//set view engine to ejs
app.set('view engine', 'ejs');
//set path to serve js and css files
app.use(express.static('public'));


//ROUTES
//ROUTE TO RENDER INDEX.EJS
app.get('/', function (req, res) {
	res.render ('index.ejs');
});

//ROUTE TO GET ALL POSTS
app.get("/API/POSTS", function (req, res) {
	
});

//ROUTE TO GET SINGLE BLOG POST
app.get("/API/POSTS/:id", function (req, res) { 
      
});

//ROUTE TO CREATE NEW POSTS
app.post("/API/POSTS", function (req, res) {
	
});

//ROUTE TO UPDATE SINGLE BLOG POST
app.put("/API/POSTS/:id", function (req, res) {

});

//ROUTE TO DELETE A POST
app.delete("API/POSTS/:id", function (req, res) {

});






/*DATA
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
} ];*/



var server = app.listen(3000);


