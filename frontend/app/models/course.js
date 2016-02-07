import DS from 'ember-data';
import EmberValidations from 'ember-validations';
import VisibleErrors from '../mixins/visible-errors';

export default DS.Model.extend(EmberValidations, VisibleErrors, {
  name: DS.attr(),
  price: DS.attr('number'),
  nbPlaces: DS.attr('number'),
  subscriptions: DS.hasMany('subscription'),
  validations: {
    'nbPlaces': { presence: true },
    'price': { presence: true },
    'name': { presence: true },
  }
});
