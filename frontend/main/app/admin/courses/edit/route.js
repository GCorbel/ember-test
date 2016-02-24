import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('course', params.id);
  },
  actions: {
    submit: function() {
      this.transitionTo('admin.courses');
    },
    cancel: function() {
      this.transitionTo('admin.courses');
    }
  }
});
