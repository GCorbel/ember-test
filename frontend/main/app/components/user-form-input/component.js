import Ember from 'ember';

export default Ember.Component.extend({
  property: null,
  item: null,
  extraClass: null,
  content: null,
  prompt: ' ',
  propertyIsModel: true,
  optionLabelPath: 'name',
  type: 'em-input',
  checkEmptiness: function() {
    var klass = 'form-group label-floating ' + this.extraClass;

    if(this.type == 'em-select') {
      if(Ember.isEmpty(this.item.get(this.property).get(this.optionLabelPath))) {
        klass += ' is-empty';
      }
    } else {
      if(Ember.isEmpty(this.item.get(this.property))) {
        klass += ' is-empty';
      }
    }
    this.set('class', klass);
  },
  init: function() {
    this.checkEmptiness();
    this.item.addObserver(this.property, () => {
      this.checkEmptiness();
    });
    return this._super.apply(this, arguments);
  },
  dashProperty: Ember.computed('property', function() {
    return this.property.dasherize();
  }),
  canShowErrors: Ember.computed('item', function() {
    return this.item.visibleErrors[this.property];
  }),
  class: Ember.computed('property', function() {
    return 'form-group label-floating ' + this.extraClass;
  })
});
