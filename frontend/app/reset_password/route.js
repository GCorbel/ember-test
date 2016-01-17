import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.Object.create();
  },
  actions: {
    submit: function() {
      var model = this.controller.model;
      Ember.$.ajax({
        url: `${Tiny.API_HOST}${Tiny.API_NAMESPACE}/passwords/`,
        type: 'POST',
        data: {
          password: {
            email: model.get('email') || ''
          }
        }
      }).then((data) => {
        this.transitionTo('login');
      }, (response) => {
        model.set('errors', [response.responseJSON.errors]);
      });
    }
  }
});
