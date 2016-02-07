import Ember from 'ember';

export default Ember.Controller.extend({
  body: function() {
    return '';
  },
  courses: function() {
    return this.store.findAll('course');
  }.property('courses'),
  selectedCourses: function() {
    return this.store.findAll('course');
  }.property('selectedCourses')
});
