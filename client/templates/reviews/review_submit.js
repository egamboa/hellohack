Template.reviewSubmit.created = function() {
  Session.set('reviewSubmitErrors', {});
}

Template.reviewSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('reviewSubmitErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('reviewSubmitErrors')[field] ? 'has-error' : '';
  }
});

Template.reviewSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();
    
    var $body = $(e.target).find('[name=body]');
    var review = {
      text:   $body.val(),
      hoodId: template.data._id,
      safety: $('[name=smile]:checked').val(),
      price:  $('[name=dollar]:checked').val(),
    };
    
    var errors = {};
    if (!review.text) {
      errors.body = "Please write some content";
      return Session.set('reviewSubmitErrors', errors);
    }
    
    Meteor.call('reviewInsert', review, function(error, reviewId) {
      if (error){
        throwError(error.reason);
      } else {
        $body.val('');
      }
    });
  }
});