import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('admin_user', params.id);
  },
  actions: {
    submit: function() {
      this.transitionTo('admin.admin_users');
    },
    cancel: function() {
      this.transitionTo('admin.admin_users');
    }
  }
});
