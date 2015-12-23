import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  model() {
    return {errors: []}
  },
  actions: {
    submit: function() {
      var model = this.controller.model;
      this.get('session').authenticate('authenticator:custom', model.email, model.password).then((response) => {
        this.transitionTo('/admin');
      }, function(response) {
        model.errors.pushObject(response.errors);
      });
    }
  }
});
