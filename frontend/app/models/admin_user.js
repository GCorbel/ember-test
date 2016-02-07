import DS from 'ember-data';
import EmberValidations from 'ember-validations';
import VisibleErrors from '../mixins/visible-errors';

export default DS.Model.extend(EmberValidations, VisibleErrors, {
  email: DS.attr('string', { defaultValue: '' }),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  validations: {
    'email': { presence: true }
  }
});
