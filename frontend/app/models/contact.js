import DS from 'ember-data';
import EmberValidations from 'ember-validations';
import VisibleErrors from '../mixins/visible-errors';

export default DS.Model.extend(EmberValidations, VisibleErrors, {
  fullname: DS.attr('string', { defaultValue: '' }),
  phone: DS.attr('string', { defaultValue: '' }),
  email: DS.attr('string', { defaultValue: '' }),
  subscription: DS.belongsTo('subscription'),
  _destroy: DS.attr('boolean', { defaultValue: false }),
  validations: {
    fullname: { presence: true },
    phone: { phone: true },
  }
});
