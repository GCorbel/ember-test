import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  type: DS.attr('string', { defaultValue: 'input' }),
  label: DS.attr('string', { defaultValue: '' }),
  options: DS.attr('string', { defaultValue: '' }),
  _destroy: DS.attr('boolean', { defaultValue: false }),
  content: Ember.computed('options', function() {
    var options = this.get('options');
    if(options !== null) {
      return options.split(',').map((option) => {
        return {value: option};
      });
    }
  }),
  property: Ember.computed('label', function() {
    return this.get('label').dasherize()
  }),
  validations: {
    'label': { presence: true },
  }
});
