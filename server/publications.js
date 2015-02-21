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
Meteor.publish('reviews', function(hoodId) {
  check(hoodId, String);
  return Reviews.find({hoodId: hoodId});
});
Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});
