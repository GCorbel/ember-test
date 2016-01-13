import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  fullname: DS.attr('string', { defaultValue: '' }),
  phone: DS.attr('string', { defaultValue: '' }),
  email: DS.attr('string', { defaultValue: '' }),
  user: DS.belongsTo('user'),
  validations: {
    fullname: { presence: true },
    phone: { presence: true },
    email: { presence: true },
  }
});
