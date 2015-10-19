$(document).ready(function(){
  BlogPost();
});




var BlogPost = function(){
  console.log("Initialized!");
  this.$formField = $("#blogPost");
  this.$container = $("#container");
  this.$submitBtn = $("#submitBtn");
};

// Added eventlisteners
BlogPost.prototype.addEventListeners = function(){
  var that = this;
  console.log("Event listeners added!");
  
//EVENT HANDLER FOR ADDING A POST
  this.$submitBtn.click(function(e){
	e.preventDefault();
  alert("form submitted");
  
	that.addToList(that.$formField.val());
	that.$formField.val('');
  
  // EVENT HANDLER FOR DELETING A POST
  this.$container.click('.glyphicon', function(event){
    that.deleteFromList(event.target.closest('li'));
  });
});
 };
 // APPENDING THE NEW POST
BlogPost.prototype.addToList = function(elem){
  var post = new Post(elem);
  this.$container.append(post);
};

// REMOVING THE POST
BlogPost.prototype.deleteFromList = function(elem){
  alert("post deleted!");
  elem.remove();
};

function Post(content){
	return $("<li>" + content + "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span></li>");
}
$(document).ready(function(){
  var blog = new BlogPost();
  blog.addEventListeners();
});