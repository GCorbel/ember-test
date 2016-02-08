import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('newsletter');
  },
  actions: {
    submit: function() {
      this.controller.model.save();
    }
  }
});
