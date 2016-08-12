/**
 * @author Paula Cogeanu
 */
Template.dashboard.helpers({
	photos:function(){
		var photosLimit = Session.get("photosLimit");
		if(photosLimit == undefined || photosLimit == 0)
			Session.set("photosLimit", 4);
			
		var photos = Blog.Post.find({},{sort: {createdAt: -1}, limit: Session.get("photosLimit")}).fetch();
		console.log(photos);
		
		var photosviews = [];
		for (var i=0, j=0; i<photos.length; i+=1){
			var new_row= {"photo1":null, "photo2":null};
			if(photos[i].featuredImage){
				new_row.photo1 = photos[i].featuredImage;
				new_row.slug1 = photos[i].slug;
				for (var j=i+1; j <photos.length; ++j) {
					if(photos[j].featuredImage) {
						 new_row.photo2 = photos[j].featuredImage;
						 new_row.slug2 = photos[j].slug;
						 photosviews.push(new_row);
						 i = j;
						 break;
				 }}
				if(j==photos.length && new_row.photo2 == null) {
					photosviews.push(new_row);
					break;
				}
			}			
		}
		console.log("PhotosView = ", photosviews);
		return photosviews;
	}
});

Template.dashboard.events({
	'click #loadMorePhotos':function(){
		
		oldLimit = Session.get("photosLimit");
		if(oldLimit){
			newLimit = oldLimit + 4 ;
		} 
		else {
			newLimit = 4;
		}
		Session.set("photosLimit", newLimit);
	}
});