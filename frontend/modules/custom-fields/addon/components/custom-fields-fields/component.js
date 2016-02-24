import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  layout: layout,
  model: null,
  customFields: function() {
    return this.get('store').findAll('CustomField');
  }.property('customFields'),
});
