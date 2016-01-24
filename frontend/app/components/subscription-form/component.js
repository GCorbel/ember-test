import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  courses: function() {
    return this.get('store').findAll('course');
  }.property('courses'),
  setItems: function() {
    var subscription = this.get('store').createRecord('subscription');
    subscription.set('objectType', 'subscription');
    subscription.set('position', 0);
    this.set('items', [subscription]);
    this.set('subscriptions', [subscription]);
    this.set('contacts', []);

    var options = this.get('store').findAll('paymentOption')
    this.controller.set('paymentOptions', options);
  }.on('init'),
  actions: {
    addContact: function() {
      var contact = this.get('store').createRecord('contact');
      contact.set('objectType', 'contact');
      contact.set('position', this.get('items.length'));
      this.get('items').pushObject(contact);
      this.get('contacts').pushObject(contact);
      this.controller.set('showPaymentOptions', false);

      var position = contact.get('position') - 1;
      var scrollTo = $(`#item-${position}`).position().top + $(`#item-${position}`).height();
      $("html, body").animate({ scrollTop: scrollTo }, 'slow');
    },
    subscribeMyself: function(subscription, value) {
      subscription.set('creator', value);
      if (value) {
        this.controller.set('myselfSubscribed', true);
      }
      this.controller.set('showFinalOptions', true);

      var position = subscription.get('position');
      var scrollTo = $(`#item-${position}`).position().top;
      $("html, body").animate({ scrollTop: scrollTo }, 'slow');
    },
    addSubscription: function() {
      var subscriptions = this.get('subscriptions');
      var lastSubscription = subscriptions[subscriptions.length - 1]
      console.log(lastSubscription.toJSON());
      var subscription = this.get('store').createRecord('subscription', lastSubscription.toJSON());
      subscription.set('objectType', 'subscription');
      if(this.controller.get('myselfSubscribed')) {
        subscription.set('creator', false);
      }
      subscription.set('position', this.get('items.length'));
      this.get('items').pushObject(subscription);
      this.get('subscriptions').pushObject(subscription);
      this.controller.set('showFinalOptions', true);
      this.controller.set('showPaymentOptions', false);

      var position = subscription.get('position') - 1;
      var scrollTo = $(`#item-${position}`).position().top + $(`#item-${position}`).height();
      $("html, body").animate({ scrollTop: scrollTo }, 'slow');
    },
    doShowPaymentOptions: function() {
      this.controller.set('showPaymentOptions', true);

      var scrollTo = $(document).height();
      $("html, body").animate({ scrollTop: scrollTo }, 'slow');
    },
    choosePaymentOption: function() {
      this.controller.set('showPaymentOptions', true);
    }
  }
});
