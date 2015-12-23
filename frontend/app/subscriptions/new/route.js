import Ember from 'ember';
import arrayAllSucceeded from '../../utils/array_all_succeeded';

export default Ember.Route.extend({
  model() {
    var subscription = this.store.createRecord('subscription');
    var user = this.store.createRecord('user');
    subscription.set('user', user);
    return subscription;
  },
  actions: {
    submit: function() {
      var subscription = this.controller.model;
      subscription.get('user').then((user) => {
        user.get('contacts').then((contacts) => {
          var contacts_json = [];
          contacts.forEach((contact) => {
            contacts_json.push(contact.getProperties('fullname', 'phone', 'email'));
          });

          var data = {
            subscription: {
              user_attributes: {
                email: user.get('email'),
                password: 'dummy',
                contacts_attributes: contacts_json
              },
              course_id: subscription.get('course.id')
            }
          }

          Ember.$.ajax({
            url: `${Tiny.API_ADDRESS}/subscriptions/`,
            type: 'POST',
            data: data
          }).then((data) => {
            this.transitionTo('subscriptions.payment', data.subscription.id);
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
