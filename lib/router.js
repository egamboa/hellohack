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
  data: function() { return Hoods.findOne(this.params._id); }
});

Router.route('/results/:hoodCase', {
  name: 'hoodList'
});