Reviews = new Mongo.Collection('reviews');

Meteor.methods({
  reviewInsert: function(reviewAttributes) {
    var user = Meteor.user();
    var hood = Hoods.findOne(reviewAttributes.hoodId);

    if (!hood)
      throw new Meteor.Error('invalid-review', 'You must review on a hood');
    
    review = _.extend(reviewAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    
    // update the hood with the number of reviews
    Hoods.update(review.hoodId, {$inc: {reviewCount: 1}});
    
    // create the review, save the id
    review._id = Reviews.insert(review);
    
    return review._id;
  }
});
