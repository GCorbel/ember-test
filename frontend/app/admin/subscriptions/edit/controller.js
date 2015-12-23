import Ember from 'ember';

export default Ember.Controller.extend({
  users: function() {
    return this.store.findAll('user');
  }.property('users'),
  courses: function() {
    return this.store.findAll('course');
  }.property('courses')
});
