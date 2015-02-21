Meteor.subscribe('reviews');
Template.hoodPage.rendered = function(){
  $('body').removeClass('background-home');
}
Template.hoodPage.helpers({
	reviews: function(){
		return Reviews.find({hoodId: this.params._id});
	}
});