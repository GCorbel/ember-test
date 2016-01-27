import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var sessionSubscriptionId = localStorage.getItem('subscription');
    if (sessionSubscriptionId == undefined) {
      return this.store.createRecord('subscription');
    } else {
      return new Ember.RSVP.Promise((resolve, reject) => {
        this.store.findRecord('subscription', sessionSubscriptionId).then((subscription) => {
          var copy = this.store.createRecord('subscription', subscription.toJSON());
          copy.set('course', subscription.get('course'));
          copy.set('paymentOption', subscription.get('paymentOption'));
          copy.set('paid', null);
          subscription.get('contacts').then((contacts) => {
            contacts.forEach((contact) => {
              var copyContact = this.store.createRecord('contact', contact.toJSON());
              copyContact.set('subscription', copy);
              copy.get('contacts').pushObject(copyContact);
            });
          });
          resolve(copy);
        });
      });
    }
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    var options = this.store.findAll('paymentOption')
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
