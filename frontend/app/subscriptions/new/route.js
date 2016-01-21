import Ember from 'ember';
import arrayAllSucceeded from '../../utils/array_all_succeeded';

export default Ember.Route.extend({
  model() {
    var sessionSubscriptionId = localStorage.getItem('subscription');
    if (sessionSubscriptionId == undefined) {
      return this.store.createRecord('subscription');
    } else {
      return this.store.findRecord('subscription', sessionSubscriptionId);
    }
  },
  saveSubscription: function(callback) {
    this.controller.model.saveWithContacts(callback);
  },
  actions: {
    payLater: function() {
      this.controller.model.set('paid', false);
      this.saveSubscription((subscription) => {
        localStorage.setItem('subscription', subscription.id);
        this.transitionTo('subscriptions.success');
      });
    },
    submit: function() {
      this.controller.model.set('paid', true);
      this.saveSubscription((subscription) => {
        var checkout = StripeCheckout.configure({
          key: "pk_test_sQlqVzfDGPAeGYhYcxWKga2D",
          locale: 'fr'
        }).open({
          email: subscription.get('email'),
          description: subscription.course.name,
          amount: subscription.course.price,
          token: () => {
            localStorage.setItem('subscription', subscription.id);
            this.transitionTo('subscriptions.success');
          }
        });
      });
    },
  }
});
