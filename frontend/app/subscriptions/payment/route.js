import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('subscription', params.id);
  },
  actions: {
    processStripeToken: function() {
      var subscription = this.controller.model;
      subscription.set('paid', true);
      subscription.save().then(() => {
        this.transitionTo('subscriptions.success');
      });
    }
  }
});
