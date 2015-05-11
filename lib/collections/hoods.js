Hoods = new Mongo.Collection('hoods');

/*Hoods.allow({
  update: function(userId, hood) { return ownsDocument(userId, hood); },
  remove: function(userId, hood) { return ownsDocument(userId, hood); },
});

Hoods.deny({
  update: function(userId, hood, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'url', 'title').length > 0);
  }
});

Hoods.deny({
  update: function(userId, hood, fieldNames, modifier) {
    var errors = validateHood(modifier.$set);
    return errors.title || errors.url;
  }
});

validateHood = function (hood) {
  var errors = {};

  if (!hood.title)
    errors.title = "Please fill in a headline";
  
  if (!hood.url)
    errors.url =  "Please fill in a URL";

  return errors;
}

Meteor.methods({
  hoodInsert: function(hoodAttributes) {
    check(this.userId, String);
    check(hoodAttributes, {
      title: String,
      url: String
    });
    
    var errors = validateHood(hoodAttributes);
    if (errors.title || errors.url)
      throw new Meteor.Error('invalid-hood', "You must set a title and URL for your hood");
    
    var hoodWithSameLink = Hoods.findOne({url: hoodAttributes.url});
    if (hoodWithSameLink) {
      return {
        hoodExists: true,
        _id: hoodWithSameLink._id
      }
    }
    
    var user = Meteor.user();
    var hood = _.extend(hoodAttributes, {
      userId: user._id, 
      author: user.username, 
      submitted: new Date(),
      commentsCount: 0,
      upvoters: [], 
      votes: 0
    });
    
    var hoodId = Hoods.insert(hood);
    
    return {
      _id: hoodId
    };
  },
  
  upvote: function(hoodId) {
    check(this.userId, String);
    check(hoodId, String);
    
    var affected = Hoods.update({
      _id: hoodId, 
      upvoters: {$ne: this.userId}
    }, {
      $addToSet: {upvoters: this.userId},
      $inc: {votes: 1}
    });
    
    if (! affected)
      throw new Meteor.Error('invalid', "You weren't able to upvote that hood");
  }
});*/
