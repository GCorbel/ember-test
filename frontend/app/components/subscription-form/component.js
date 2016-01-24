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
  scrollTo: function(item) {
    Ember.run.scheduleOnce('afterRender', () => {
      var position = item.get('position');
      var scrollTo = $(`#item-${position}`).position().top;
      $("html, body").animate({ scrollTop: scrollTo }, 'slow');
    });
  },
  scrollToBottom: function() {
    var scrollTo = $(document).height();
    $("html, body").animate({ scrollTop: scrollTo }, 'slow');
  },
  createItem: function(type, values = {}) {
    var item = this.get('store').createRecord(type, values);
    item.set('objectType', type);
    item.set('position', this.get('items.length'));
    this.get('items').pushObject(item);
    this.get(`${type}s`).pushObject(item);
    return item;
  },
  actions: {
    addContact: function() {
      var contact = this.createItem('contact');
      this.controller.set('showPaymentOptions', false);
      this.scrollTo(contact);
    },
    subscribeMyself: function(subscription, value) {
      subscription.set('creator', value);
      if (value) {
        this.controller.set('myselfSubscribed', true);
      }
      this.controller.set('showFinalOptions', true);
      this.scrollTo(subscription);
    },
    addSubscription: function() {
      var subscriptions = this.get('subscriptions');
      var lastSubscription = subscriptions[subscriptions.length - 1]

      var subscription = this.createItem('subscription', lastSubscription.toJSON());
      if(this.controller.get('myselfSubscribed')) {
        subscription.set('creator', false);
      }

      this.controller.set('showFinalOptions', true);
      this.controller.set('showPaymentOptions', false);

      this.scrollTo(subscription);
    },
    doShowPaymentOptions: function() {
      this.controller.set('showPaymentOptions', true);
      this.scrollToBottom();
    },
    choosePaymentOption: function() {
      this.controller.set('showPaymentOptions', true);
    }
  }
});
