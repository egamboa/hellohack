Notifications = new Mongo.Collection('notifications');

createReviewNotification = function(alert) {
  var hood = Hoods.findOne(alert.hoodId);
  if (alert.userId !== hood.userId) {
    Notifications.insert({
      userId: post.userId,
      hoodId: post._id,
      alertId: alert._id,
      read: false
    });
  }
};