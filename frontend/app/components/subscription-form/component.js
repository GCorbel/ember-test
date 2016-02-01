import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  owner: function() {
    var owner = this.get('store').createRecord('contact');
    owner.set('paymentOption', this.get('paymentOptions.firstObject'));
    return owner;
  }.property('owner'),
  paymentOptions: function() {
    return this.get('store').findAll('paymentOption');
  }.property('paymentOptions'),
  courses: function() {
    return this.get('store').findAll('course');
  }.property('courses'),
  setItems: function() {
    var subscription = this.get('store').createRecord('subscription');

    subscription.set('objectType', 'subscription');
    subscription.set('position', 0);
    subscription.set('hasToChooseCreator', true);
    this.set('items', [subscription]);
    this.set('subscriptions', [subscription]);
    this.set('contacts', []);

    var options = this.get('store').findAll('paymentOption');
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
  scrollOnError: function() {
    Ember.run.scheduleOnce('afterRender', () => {
      if($('div.form-group.has-error').length > 0) {
        var scrollTo = $('div.form-group.has-error:first').offset().top;
        $("html, body").animate({ scrollTop: scrollTo }, 'slow');
      }
    });
  },
  validate: function(successCallback) {
    var promises = this.get('items').map((item) => { return item.validate(); });
    promises.pushObject(this.get('owner').validate());

    Ember.RSVP.all(promises).then((values) => {
      successCallback();
    }).catch(() => {
      this.get('items').forEach((item) => { item.showErrors(); });
      this.scrollOnError();
    });
  },
  validateContacts: function(successCallback, failCallback) {
    if(this.get('contacts.length') > 0) {
      this.set('hasNoContacts', false);
      successCallback();
    } else {
      this.set('hasNoContacts', true);
      failCallback();
    }
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
      this.validate(() => {
        var contact = this.createItem('contact');
        this.controller.set('showPaymentOptions', false);
        this.scrollTo(contact);
      });
    },
    subscribeMyself: function(subscription, value) {
      subscription.set('creator', value);
      subscription.set('hasToChooseCreator', false);
      if (value) {
        this.controller.set('owner', subscription);
        subscription.set('paymentOption', this.get('paymentOptions.firstObject'));
        this.controller.set('myselfSubscribed', true);
      }
      this.controller.set('showFinalOptions', true);
      this.scrollTo(subscription);
    },
    removeContact: function(contact) {
      this.get('items').removeObject(contact);
      this.get('contacts').removeObject(contact);
      this.controller.set('showFinalOptions', true);
    },
    removeSubscription: function(subscription) {
      this.get('items').removeObject(subscription);
      this.get('subscriptions').removeObject(subscription);

      if(subscription.get('creator')) {
        this.controller.set('myselfSubscribed', false);
      }

      if(this.get('items.length') == 0) {
        var subscription = this.get('store').createRecord('subscription');

        subscription.set('objectType', 'subscription');
        subscription.set('position', 0);
        subscription.set('hasToChooseCreator', true);
        this.get('items').pushObject(subscription);
        this.get('subscriptions').pushObject(subscription);

        this.controller.set('showFinalOptions', false);
        this.controller.set('showPaymentOptions', false);
      }
    },
    addSubscription: function() {
      this.validate(() => {
        var subscriptions = this.get('subscriptions');
        var lastSubscription = subscriptions[subscriptions.length - 1];

        var subscription = this.createItem('subscription', lastSubscription.toJSON());
        subscription.set('birthDate', lastSubscription.get('birthDate'));
        subscription.set('course', lastSubscription.get('course'));
        if(this.controller.get('myselfSubscribed')) {
          subscription.set('creator', false);
          subscription.set('hasToChooseCreator', false);
        } else {
          subscription.set('hasToChooseCreator', true);
        }

        this.controller.set('showFinalOptions', true);
        this.controller.set('showPaymentOptions', false);

        this.scrollTo(subscription);
      });
    },
    doShowPaymentOptions: function() {
      this.validateContacts(() => {
        this.validate(() => {
          this.controller.set('showPaymentOptions', true);
          this.scrollToBottom();
        })
      }, () => { this.validate() } );
    },
    choosePaymentOption: function() {
      this.validate(() => {
        this.controller.set('showPaymentOptions', true);
      });
    },
    submit: function() {
      this.validateContacts(() => {
        this.validate(() => {
          this.sendAction('submit',
              this.get('subscriptions'),
              this.get('contacts'),
              this.get('owner'));
        })
      }, () => { this.validate() } );
    }
  }
});
