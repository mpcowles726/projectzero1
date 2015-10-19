var schema = mongoose.Schema;
var postSchema = new Schema ( {
	title: String,
	content: String,
});

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;