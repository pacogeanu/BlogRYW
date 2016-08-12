/**
 * @author Paula Cogeanu
 */
Router.configure({
	layoutTemplate: 'layoutBlog'
});

Router.route('/', function () {
	this.render('home');
});

Router.route('/news', function () {
	this.render('news');
});

Router.route('/blog', function () {
	this.layout('layoutBlog');
	this.render('header', {
      to:"header"
    });
    this.render('blog');
});