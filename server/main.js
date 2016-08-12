/*
 * @author Paula Cogeanu
 */

Meteor.startup(function(){			
	Meteor.publish('posts', function() {
		return Blog.Post.find({});
	});
		
	Meteor.publish('users', function() {
		return Meteor.users.find();
	});
});


