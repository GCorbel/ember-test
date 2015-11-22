import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('course');
  },
  actions: {
    submit: function() {
      this.transitionTo('admin.courses');
    },
    cancel: function() {
      this.transitionTo('admin.courses');
    },
  },
});
