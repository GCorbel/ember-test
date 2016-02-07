import DS from 'ember-data';
import EmberValidations from 'ember-validations';
import VisibleErrors from '../mixins/visible-errors';

export default DS.Model.extend(EmberValidations, VisibleErrors, {
  email: DS.attr('string', { defaultValue: '' }),
  subscriptions: DS.hasMany('subscription'),
  contacts: DS.hasMany('contact'),
  validations: {
    email: { email: true }
  }
});
