Meteor.subscribe('hoods');
Template.hoodList.rendered = function(){
  $('body').removeClass('background-home');
}
Template.hoodList.helpers({
	hoods: function(){
		return Hoods.find({});
	}
});