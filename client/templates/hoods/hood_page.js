Meteor.subscribe('reviews');
Template.hoodPage.rendered = function(){
  $('body').removeClass('background-home');
}
Template.hoodPage.helpers({
	reviews: function(){
		var path = Router.current().route.path(this);
		var trimPath = path.slice(6,path.length);
		return Reviews.find({hoodId: trimPath});
	}
});