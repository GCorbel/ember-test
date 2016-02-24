import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('admin_user');
  },
  actions: {
    submit: function() {
      this.transitionTo('admin.admin_users');
    },
    cancel: function() {
      this.transitionTo('admin.admin_users');
    },
  },
});
