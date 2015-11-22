import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete: function(user) {
      user.destroyRecord();
    }
  }
});
