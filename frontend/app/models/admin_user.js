import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string', { defaultValue: '' }),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string')
});
