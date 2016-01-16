import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  model() {
    return {errors: []}
  },
  actions: {
    submit: function() {
      var session = this.get('session');
      var model = this.controller.model;
      session.authenticate('authenticator:api', model.email, model.password).then((response) => {
        this.transitionTo('/admin');
      }, function(response) {
        model.errors.pushObject(response.errors);
      });
    }
  }
});
