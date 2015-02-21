Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
    return [Meteor.subscribe('notifications')]
  }
});

Router.route('/', {name: 'home'});

Router.route('/hood/:_id', {
  name: 'hoodPage',
  waitOn: function() {
    return [
      Meteor.subscribe('singleHood', this.params._id),
      Meteor.subscribe('reviews', this.params._id)
    ];
  },
  data: function() { return Hoods.findOne(this.params._id); }
});

Router.route('/results/:hoodCase', {
  name: 'hoodList'
});