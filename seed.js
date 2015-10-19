
var db = require('./models');


var posts = [ 
{
	title: "49ers snap losing streak in 25-20 win over Ravens",
	content: "Torrey Smith had a 76-yard touchdown in the first half and Anquan Boldin made a 51-yard catch in the fourth quarter to set up a Colin Kaepernick touchdown pass to Quinton Patton. Cornerback Shareece Wright, who landed with the Ravens after asking for and getting his release from the 49ers, fell down on the play to leave Patton wide open and make for a lopsided return on the talent exchange between the two teams.",
},
	{
		title: "Sunday Night wrap-up: Tom Brady does it again",
		content: "If Tom Brady is, in fact, human, he had to enjoy this. Because not only did the Patriots quarterback enjoy his payback to the Colts for an offseason spent on #DeflateGate and a perfectly good cell phone, but he also added a chapter to the legend that he can flip a switch and drop this kind of performance as soon as he’s offended."
	}];

db.Post.remove({}, function(err, foods) {
	db.Post.create(posts, function(err, posts) {
		if (err) { 
			return console.log(err); }
			console.log("created", posts.length, "posts");
			process.exit();
	});
});