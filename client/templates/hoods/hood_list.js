Meteor.subscribe('hoods');
Template.hoodList.rendered = function(){
  $('body').removeClass('background-home').addClass('background-results');
}

Template.hoodList.helpers({
	hoods: function(){
		return Hoods.find({});
	},

  size: function(){
    return Hoods.find({}).fetch().length;
  }
});