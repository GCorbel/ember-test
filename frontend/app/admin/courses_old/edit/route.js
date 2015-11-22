import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('course', params.id);
  },
  actions: {
    submit: function() {
      this.controller.model.save()
      this.transitionTo('admin.courses');
    },
    cancel: function() {
      this.controller.model.rollbackAttributes();
      this.transitionTo('admin.courses');
    }
  },
});
