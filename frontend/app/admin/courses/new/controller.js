import Ember from 'ember';

export default Ember.Controller.extend({
  columns: [
    { property: 'name', label: 'Name' },
    { property: 'price', label: 'Price' }
  ]
});
