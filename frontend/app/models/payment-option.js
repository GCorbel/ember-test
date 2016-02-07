import DS from 'ember-data';
import EmberValidations from 'ember-validations';
import VisibleErrors from '../mixins/visible-errors';

export default DS.Model.extend(EmberValidations, VisibleErrors, {
  name: DS.attr('string'),
  recurrencies: DS.attr('number'),
  validations: {
    'name': { presence: true },
    'recurrencies': { presence: true },
  }
});
