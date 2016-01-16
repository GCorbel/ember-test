import Ember from 'ember';
import arrayAllSucceeded from '../../utils/array_all_succeeded';

export default Ember.Route.extend({
  model() {
    var subscription = this.store.createRecord('subscription');
    return subscription;
  },
  saveSubscription: function(callback) {
    this.controller.model.saveWithContacts(callback);
  },
  actions: {
    payLater: function() {
      this.controller.model.set('paid', false);
      this.saveSubscription((subscription) => {
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
            this.transitionTo('subscriptions.success');
          }
        });
      });
    },
  }
});
