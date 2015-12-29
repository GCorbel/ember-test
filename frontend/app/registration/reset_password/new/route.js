import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.Object.create();
  },
  actions: {
    submit: function() {
      var model = this.controller.model;
      Ember.$.ajax({
        url: `${Tiny.API_ADDRESS}/passwords/`,
        type: 'POST',
        data: {
          password: {
            email: model.get('email') || ''
          }
        }
      }).then((data) => {
        this.transitionTo('registration.login');
      }, (response) => {
        model.set('errors', [response.responseJSON.errors]);
      });
    }
  }
});
