/**
 * @author Paula Cogeanu
 */
// startup
Meteor.startup(function() {
	Meteor.subscribe('posts');
	Meteor.subscribe('users');
});