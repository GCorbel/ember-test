import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.id);
  },
  actions: {
    submit: function() {
      this.transitionTo('admin.users');
    },
    cancel: function() {
      this.transitionTo('admin.users');
    }
  }
});
