import Ember from 'ember';
import arrayAllSucceeded from '../../utils/array_all_succeeded';

export default Ember.Route.extend({
  model() {
    var subscription = this.store.createRecord('subscription');
    var user = this.store.createRecord('user');
    subscription.set('user', user);
    return subscription;
  },
  saveSubscription: function(callback) {
    var subscription = this.controller.model;
    subscription.get('user').then((user) => {
      user.get('contacts').then((contacts) => {
        var contacts_json = [];
        contacts.forEach((contact) => {
          contacts_json.push(contact.getProperties('fullname', 'phone', 'email'));
        });

        var data = {
          subscription: {
            first_name: subscription.get('firstName'),
            last_name: subscription.get('lastName'),
            phone: subscription.get('phone'),
            comments: subscription.get('comments'),
            user_attributes: {
              email: user.get('email'),
              contacts_attributes: contacts_json
            },
            course_id: subscription.get('course.id')
          }
        }

        Ember.$.ajax({
          url: `${Tiny.API_HOST}/subscriptions/`,
          type: 'POST',
          data: data
        }).then((data) => {
          callback(subscription);
        }, (data) => {
          var errors = data.responseJSON.errors
            subscription.get('errors').add('course', errors.course);
          user.get('errors').add('email', errors.user.email);
          user.get('contacts').forEach((contact, index) => {
            var error = errors.user.contacts[index];
            contact.get('errors').add('email', error.email);
            contact.get('errors').add('fullname', error.fullname);
            contact.get('errors').add('phone', error.phone);
          });
        });
      });
    });
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
          email: subscription.get('user.email'),
          description: subscription.course.name,
          amount: subscription.course.price,
          token: () => {
            this.transitionTo('subscriptions.success');
          }
        });
      });
    },
    addContact: function() {
      var subscription = this.controller.model;
      subscription.get('user').then((user) => {
        var contact = this.store.createRecord('contact');
        user.get('contacts').pushObject(contact);
        contact.set('user', user);
      })
    },
    removeContact: function(contact) {
      var subscription = this.controller.model;
      subscription.get('user').then((user) => {
        user.get('contacts').removeObject(contact);
      })
    }
  }
});
