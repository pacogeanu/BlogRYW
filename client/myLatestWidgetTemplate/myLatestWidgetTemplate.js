/**
 * @author Paula Cogeanu
 */
Template.myLatestWidgetTemplate.helpers({
	 shareData: function() {
    	var post = Blog.Post.find({},{sort: {createdAt: -1}}).fetch()[0];
    	
    	var authorName = Meteor.users.findOne({'_id':post.userId}).emails[0].address;
	    return {
	      title: post.title,
	      excerpt: post.excerpt,
	      description: post.description,
	      authorName: authorName,
	      thumbnail: post.thumbnail(),
	      publishedAt: post.publishedAt,
	      body: post.body,
	      postImage: post.featuredImage
	    };
	}
});
