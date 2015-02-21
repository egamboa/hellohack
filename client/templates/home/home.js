Meteor.subscribe('locations');

Session.set('locations', []);

Template.home.helpers({
  searchResults: function () {
    return Session.get('locations');
  },

  locations: function () {
    return Session.get('locations');
  }
});

Template.home.events({
  "keyup .search": function(e) {
    
    if (e.target.value) {
      var re = new RegExp('.*' + e.target.value + '.*');
      
      Session.set('locations', Locations.find({
        name: {
          $regex : re
        }
      }).fetch());
    } else {
      Session.set('locations', []);
    }
  }
});