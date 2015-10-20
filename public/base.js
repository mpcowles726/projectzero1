var BlogPost = function(){
  console.log("Initialized!");
  this.$formTitle = $("#postTitle");
  this.$formContent = $("#postContent");
  this.$container = $("#postContainer");
  this.$submitBtn = $("#submitBtn");

  this.$form = $('#newPostForm');
};

// Added eventlisteners
BlogPost.prototype.addEventListeners = function(){
  var that = this;
  console.log("Event listeners added!");
  
//EVENT HANDLER FOR ADDING A POST
  this.$form.submit(function(e){
  e.preventDefault();
  var newPost = $(this).serialize();
  console.log("form submitted", newPost);

  $.ajax({
    url: '/api/posts',
    method: 'POST',
    data: newPost,
    success: function (data) {
      console.log(data); 
     that.addToList(data); 
    }
  });
 // that.addToList(that.$formField.val());
  //that.$formTitle.val('');
  
  // EVENT HANDLER FOR DELETING A POST
  // this.$container.click('.glyphicon', function(event){
  //   that.deleteFromList(event.target.closest('li'));
  // });
  });
 };
 // APPENDING THE NEW POST
BlogPost.prototype.addToList = function(post){
   var $newPost = $('<li class="white"></li>');
   var postText = post.title + '<br>' + post.content;
   $newPost.html(postText);
   this.$container.prepend($newPost);
  // this.$container.append(post);
};

// REMOVING THE POST
BlogPost.prototype.deleteFromList = function(post){
  // alert("post deleted!");
  // elem.remove();
};

// function Post(content){
//   return $("<li>" + content + "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span></li>");
// }
$(document).ready(function(){
  var blog = new BlogPost();
  blog.addEventListeners();
});