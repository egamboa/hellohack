Meteor.publish('hoods', function() {
  return Hoods.find({});
});

Meteor.publish('reviews', function(hoodId) {
  return Reviews.find({hoodId: hoodId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});
