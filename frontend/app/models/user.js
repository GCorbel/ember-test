import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  email: DS.attr('string', { defaultValue: '' }),
  subscriptions: DS.hasMany('subscription'),
  contacts: DS.hasMany('contact'),
  validations: {
    email: { email: true }
  }
});
