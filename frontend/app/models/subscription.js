import DS from 'ember-data';
import EmberValidations, { validator } from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  courseId: DS.attr(),
  course: DS.belongsTo('course'),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  comments: DS.attr('string'),
  phone: DS.attr('string'),
  paid: DS.attr('boolean', { defaultValue: false }),
  contacts: DS.hasMany('contact'),
  fullname: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  validations: {
    'course': validator(function() {
      if (Ember.isBlank(this.get('course.id'))) {
        return 'you have to choose a course';
      }
    }),
    'email': { email: true }
  },
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
          contacts_attributes: contacts_json,
          course_id: this.get('course.id')
        }
      }

      var url;
      var type;

      if (this.id) {
        url = `${Tiny.API_HOST}/subscriptions/${this.id}`;
        type = 'PATCH';
      } else {
        url = `${Tiny.API_HOST}/subscriptions/`;
        type = 'POST';
      }

      Ember.$.ajax({
        url: url,
        type: type,
        data: data
      }).then((data) => {
        this.set('contacts', []);
        if (this.id == null) {
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
