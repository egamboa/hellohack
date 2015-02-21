Meteor.subscribe('hoods');

Template.hoodList.helpers({
	hoods: function(){
		return Hoods.find({});
	}
});