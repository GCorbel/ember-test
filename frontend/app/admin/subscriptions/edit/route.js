import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('subscription', params.id);
  },
  actions: {
    submit: function() {
      this.saveSubscription((subscription) => {
        $('.modal').modal('hide');
        this.transitionTo('admin.subscriptions');
      }, function() {});
    },
    cancel: function() {
      this.controller.model.rollbackAttributes();
      this.transitionTo('admin.subscriptions');
    }
  },
  saveSubscription: function(callback) {
    this.controller.model.saveWithContacts(callback);
  },
  trigger: function() {
    Ember.run.schedule('afterRender', () => {
      $('.modal').modal().on('hidden.bs.modal', () => {
        this.send('cancel');
      });
    });
  }.on('init')
});
