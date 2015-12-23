import Ember from 'ember';

export default Ember.Controller.extend({
  courses: function() {
    return this.store.findAll('course');
  }.property('courses'),
  actions: {
    selectCourse: function(course) {
      this.model.set('course', course);
    }
  }
});
