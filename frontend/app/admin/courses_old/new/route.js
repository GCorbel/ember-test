import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
  actions: {
    submit: function() {
      var course = this.store.createRecord('course', this.controller.model);
      this.controller.set('model', {});
      course.save();
      this.transitionTo('admin.courses');
    },
    cancel: function() {
      this.transitionTo('admin.courses');
    },
  },
});
