import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  courses: function() {
    return this.store.findAll('course');
  }.property('courses'),
  actions: {
    selectCourse: function(course) {
      this.model.set('course', course);
    }
  },
  validations: {
    'model.course.id': {
      presence: true
    }
  }
});
