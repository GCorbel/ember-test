import Ember from 'ember';

export default Ember.Controller.extend({
  columns: ['user', 'course'],
  actions: {
    delete: function(model) {
      model.destroyRecord();
    }
  }
});
