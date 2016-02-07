import Ember from 'ember';

export default Ember.Service.extend({
  stripeToken: null,
  paymentOption: null,
  user: null,
  contacts: [],
  subscriptions: [],
  toJSON: function() {
    var subscriptionsAttributes = this.get('subscriptions').map((subscription) => {
      var subscriptionJson = subscription.serialize();
      subscriptionJson.contacts_attributes = this.get('contacts').map((contact) => {
        return contact.serialize();
      });
      subscriptionJson.course_id = subscription.get('course.id');
      return subscriptionJson;
    });

    var userJson = this.get('user').serialize();
    userJson.subscriptions_attributes = subscriptionsAttributes;
    return userJson;
  },
  save: function(callback) {
    var url = `${Tiny.API_HOST}${Tiny.API_NAMESPACE}/users/`;
    var type = 'POST';
    Ember.$.ajax({
      url: url,
      type: 'POST',
      data: {
        user: this.toJSON(),
        stripe_token: this.get('stripeToken'),
        payment_option: this.get('paymentOption')
      },
      success: callback
    });
  }
});
