import Ember from 'ember';

export default Ember.Controller.extend({
  typeOptions: Ember.A([
    { id: 'input', name: 'Texte court' },
    { id: 'select', name: 'Selection' },
    { id: 'text', name: 'Texte long' },
  ]),
});
