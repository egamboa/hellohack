Meteor.publish('locations', function() {
  return Locations.find({});
});
Meteor.publish('hoods', function() {
  return Hoods.find({});
});
Meteor.publish('singleHood', function(id) {
  check(id, String);
  return Hoods.find(id);
});
Meteor.publish('reviews', function() {
  return Reviews.find({});
});
Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});
