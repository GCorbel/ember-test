import Ember from 'ember';
import arrayAllSucceeded from '../../utils/array_all_succeeded';

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
    submit: function() {
      var subscription = this.controller.model
      if(subscription.get('paymentOption.recurrencies') == null) {
        this.controller.model.set('paid', false);
        subscription.saveWithContacts((subscription) => {
          localStorage.setItem('subscription', subscription.id);
          this.transitionTo('subscriptions.success');
        });
      } else {
        subscription.validate().then(() => {
          var checkout = StripeCheckout.configure({
            key: "pk_test_sQlqVzfDGPAeGYhYcxWKga2D",
            locale: 'fr'
          }).open({
            email: subscription.get('email'),
            description: subscription.course.name,
            amount: subscription.course.price,
            token: (result) => {
              this.controller.model.set('paid', true);
              subscription.set('stripeToken', result.id);
              subscription.saveWithContacts((subscription) => {
                localStorage.setItem('subscription', subscription.id);
                this.transitionTo('subscriptions.success');
              });
            }
          });
        });
      }
    },
  }
});
