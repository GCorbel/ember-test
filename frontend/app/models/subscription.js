import DS from 'ember-data';
import EmberValidations, { validator } from 'ember-validations';
import Copyable from 'ember-cli-copyable';
import VisibleErrors from '../mixins/visible-errors';
import moment from 'moment';

export default DS.Model.extend(EmberValidations, VisibleErrors, Copyable, {
  courseId: DS.attr(),
  course: DS.belongsTo('course'),
  paymentOption: DS.belongsTo('paymentOption'),
  email: DS.attr('string'),
  birthDate: DS.attr('date'),
  firstName: DS.attr('string', { defaultValue: '' }),
  lastName: DS.attr('string', { defaultValue: '' }),
  comments: DS.attr('string'),
  phone: DS.attr('string'),
  paid: DS.attr('boolean', { defaultValue: false }),
  contacts: DS.hasMany('contact'),
  fullname: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  validations: {
    'firstName': { presence: true },
    'lastName': { presence: true },
    'birthDate': { presence: true },
    'email': { subscriptionEmail: true },
    'phone': { subscriptionPhone: true },
    'course': validator(function() {
      if (Ember.isBlank(this.get('course.id'))) {
        return 'you have to choose a course';
      } else if (this.get('course.subscriptions.length') > this.get('course.nbPlaces')) {
        return 'Plus de places disponibles';
      }
    }),
  },
  isAdult: Ember.computed('birthDate', function() {
    return moment(this.get('birthDate')) < moment().subtract(18, 'years');
  }),
  saveWithContacts: function(callback) {
    this.get('contacts').then((contacts) => {
      var contacts_json = [];
      contacts.forEach((contact) => {
        contacts_json.push(
          contact.getProperties('id', 'fullname', 'phone', 'email', '_destroy')
        );
      });

      var data = {
        subscription: {
          first_name: this.get('firstName'),
          last_name: this.get('lastName'),
          phone: this.get('phone'),
          comments: this.get('comments'),
          email: this.get('email'),
          paid: this.get('paid'),
          custom_data: this.get('customData'),
          contacts_attributes: contacts_json,
          course_id: this.get('course.id'),
          payment_option_id: this.get('paymentOption.id')
        }
      };

      var stripeToken = this.get('stripeToken');
      if(stripeToken !== null) {
        data.subscription.stripe_token = stripeToken;
      }

      var url;
      var type;

      if (this.id) {
        url = `${Tiny.API_HOST}${Tiny.API_NAMESPACE}/subscriptions/${this.id}`;
        type = 'PATCH';
      } else {
        url = `${Tiny.API_HOST}${Tiny.API_NAMESPACE}/subscriptions/`;
        type = 'POST';
      }

      Ember.$.ajax({
        url: url,
        type: type,
        data: data
      }).then((data) => {
        this.set('contacts', []);
        if (this.id === null) {
          this.set('id', data.subscription.id);
        }
        this.reload();
        callback(this);
      }, (data) => {
        var errors = data.responseJSON.errors;
        this.get('errors').add('course', errors.course);
        this.get('contacts').forEach((contact, index) => {
          var error = errors.contacts[index];
          contact.get('errors').add('email', error.email);
          contact.get('errors').add('fullname', error.fullname);
          contact.get('errors').add('phone', error.phone);
        });
      });
    });
  }
});
