import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('CustomField');
  },
  actions: {
    submit: function() {
      this.get('controller.model').forEach((customField) => {
        if(customField.get('hasDirtyAttributes')) {
          if(customField.get('_destroy')) {
            customField.destroyRecord();
          } else {
            customField.save();
          }
        }
      });
    },
    add: function() {
      this.store.createRecord('CustomField');
    },
    delete: function(customField) {
      customField.set('_destroy', true);
    }
  }
});
