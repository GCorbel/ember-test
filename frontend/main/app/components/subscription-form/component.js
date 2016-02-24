import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  courses: function() {
    return this.get('store').findAll('course');
  }.property('courses'),
  actions: {
    addContact: function() {
      var subscription = this.controller.model;
      var contact = this.get('store').createRecord('contact');
      subscription.get('contacts').pushObject(contact);
      contact.set('subscription', subscription);
    },
    removeContact: function(contact) {
      var subscription = this.controller.model;
      contact.set('_destroy', true);
    }
  }
});
