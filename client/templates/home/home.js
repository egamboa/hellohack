Meteor.subscribe('hoods');

Session.set('searchResults', []);

Template.home.helpers({
  searchResults: function () {
    return Session.get('searchResults');
  },

  results: function () {
    return Session.get('searchResults');
  }
});

Template.home.events({
  "keyup .search": function(e) {
    Session.set('searchResults', Hoods.find({}).fetch());
  }
});