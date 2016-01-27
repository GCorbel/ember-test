import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('subscription');
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    var options = this.store.findAll('paymentOption');
    this.controller.set('paymentOptions', options);
  },
  actions: {
    submit: function(subscriptions, contacts) {
      var prices = subscriptions.mapBy('course.price');
      var price = prices.reduce((a, b) => a + b, 0);
      var checkout = StripeCheckout.configure({
        key: "pk_test_sQlqVzfDGPAeGYhYcxWKga2D",
        locale: 'fr'
      }).open({
        email: subscription.get('email'),
        amount: price,
        token: (result) => {
          console.log("paid");
        }
      });
    },
  }
});
