var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/projectzero1');



module.exports.Post = require('./post.js');