import DS from 'ember-data';
import EmberValidations, { validator } from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  userId: DS.attr(),
  user: DS.belongsTo('user'),
  courseId: DS.attr(),
  course: DS.belongsTo('course'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  comments: DS.attr('string'),
  phone: DS.attr('string'),
  paid: DS.attr('boolean', { defaultValue: false }),
  validations: {
    'course': validator(function() {
      if (Ember.isBlank(this.get('course.id'))) {
        return 'you have to choose a course';
      }
    }),
    'user.email': { email: true },
    'contacts': {
      inline: validator(function() {
        var contacts = this.get('user.contacts') || [];

        contacts.forEach((contact) => {
          if(!contact.get('isValid')) {
            this.errors.pushObject('one contact or more is invalid');
          }
        });
      })
    }
  }
});
