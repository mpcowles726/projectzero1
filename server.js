//REQUIREMENTS
var express = require('express');
var app = express();
var db = require('./models');
var mongoose = require('mongoose');


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
app.get("/api/posts", function (req, res) {
	db.Post.find().exec(function(err, posts) {
		if (err) { return console.log("find error: " + err); }
		res.render('index', {posts: posts});
	});
});

//ROUTE TO GET SINGLE BLOG POST
app.get("/API/POSTS/:id", function (req, res) { 
      
});

//ROUTE TO CREATE NEW POSTS
app.post("/API/POSTS", function (req, res) {
	var newPost = req.body;
	console.log(newPost);

	db.Food.create(newFood, function(err, food) {
		if (err) { return console.log("create error: " + err); }
	});
});

//ROUTE TO UPDATE SINGLE BLOG POST
app.put("/API/POSTS/:id", function (req, res) {

});

//ROUTE TO DELETE A POST
app.delete("API/POSTS/:id", function (req, res) {

});








var server = app.listen(3000);


