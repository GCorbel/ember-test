import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  fullname: DS.attr('string', { defaultValue: '' }),
  phone: DS.attr('string', { defaultValue: '' }),
  email: DS.attr('string', { defaultValue: '' }),
  subscription: DS.belongsTo('subscription'),
  _destroy: DS.attr('boolean', { defaultValue: false }),
  validations: {
    fullname: { presence: true },
    phone: { presence: true },
    email: { presence: true },
  }
});
