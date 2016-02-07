import DS from 'ember-data';
import EmberValidations from 'ember-validations';
import VisibleErrors from '../mixins/visible-errors';

export default DS.Model.extend(EmberValidations, VisibleErrors, {
  title: DS.attr('string', { defaultValue: '' }),
  body: DS.attr('string', { defaultValue: '' }),
  hasMany: DS.belongsTo('course'),
  validations: {
    title: { presence: true },
    body: { presence: true }
  }
});
