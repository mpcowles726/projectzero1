//REQUIREMENTS
var express = require('express');
var app = express();
var db = require('./models/index.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


//CONFIGURATIONS
//set view engine to ejs
app.set('view engine', 'ejs');
//set path to serve js and css files
app.use(express.static('public'));
// config body parser
app.use(bodyParser.urlencoded( { extended: true }));


//ROUTES
//ROUTE TO RENDER INDEX.EJS
app.get('/', function (req, res) {
	db.Post.find({}).exec(function (err, posts) {
		if (err) { return console.log('find error: ' + err); }
	res.render ('index.ejs', {posts: posts});
	});
});

//ROUTE TO GET ALL POSTS
app.get("/api/posts", function (req, res) {
	db.Post.find().exec(function(err, posts) {
		if (err) { return console.log("find error: " + err); }
		res.render('index', {posts: posts});
	});
});

//ROUTE TO GET SINGLE BLOG POST
app.get("/api/posts/:id", function (req, res) { 
      
});

//ROUTE TO CREATE NEW POSTS
app.post("/api/posts", function (req, res) {
	var newPost = req.body;
	console.log(newPost);



	db.Post.create(newPost, function(err, post) {
		if (err) { return console.log("create error: " + err); }
		res.json(post);
	});
});


//ROUTE TO UPDATE SINGLE BLOG POST
app.put("/api/posts/:id", function (req, res) {
	var targetId = req.param.id;
	db.Post.put(targetId, function (err, put ) {

	});
});

//ROUTE TO DELETE A POST
app.delete("/api/posts/:id", function (req, res) {
	var targetId = req.param.id;
//	db.Post.delete
});








var server = app.listen(3000);


