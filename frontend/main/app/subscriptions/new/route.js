import Ember from 'ember';

export default Ember.Route.extend({
  createSubscriptions: Ember.inject.service(),
  setupController: function(controller, model) {
    this._super(controller, model);

    var subscription = this.get('store').createRecord('subscription');
    subscription.set('objectType', 'subscription');
    subscription.set('position', 0);
    subscription.set('hasToChooseCreator', true);
    this.controller.set('items', [subscription]);
    this.controller.set('subscriptions', [subscription]);
    this.controller.set('contacts', []);
  },
  actions: {
    submit: function(subscriptions, contacts, owner) {
      var prices = subscriptions.mapBy('course.price');
      var price = prices.reduce((a, b) => a + b, 0);
      var checkout = StripeCheckout.configure({
        key: "pk_test_sQlqVzfDGPAeGYhYcxWKga2D",
        locale: 'fr'
      }).open({
        email: owner.get('email'),
        amount: price,
        token: (result) => {
          var user = this.store.createRecord('user', { email: owner.get('email') });
          user.set('subscriptions', subscriptions);
          user.set('contacts', contacts);
          var createSubscriptions = this.get('createSubscriptions');
          createSubscriptions.set('user', user);
          createSubscriptions.set('subscriptions', subscriptions);
          createSubscriptions.set('contacts', contacts);
          createSubscriptions.set('stripeToken', result.id);
          createSubscriptions.set('paymentOption', owner.get('paymentOption.id'));
          createSubscriptions.save(() => {
            this.transitionTo('subscriptions.success');
          });
        }
      });
    },
    didTransition: function() {
      Ember.run.scheduleOnce('afterRender', this, function(){
        $.material.init({validate: false})
      });
    }
  },
});
