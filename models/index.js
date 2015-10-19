var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/projectzero.1');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	// yay!
});

model.exports.Post = require('./post.js');