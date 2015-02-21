Meteor.subscribe('posts');

Session.set('searchResults', []);

Template.home.helpers({
  searchResults: function () {
    return Session.get('searchResults');
  }
});

Template.home.events({
  "keyup .search": function(e) {
    Session.set('searchResults', Posts.find({title: {$regex: e.target.value}}).fetch());
  }
});