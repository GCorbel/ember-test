import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  model(params, transition) {
    return Ember.Object.create({token: params.token,
      id: transition.params.admin_users.id});
  },
  actions: {
    submit: function() {
      var model = this.controller.model;
      Ember.$.ajax({
        url: `${Tiny.API_HOST}/passwords/`,
        type: 'PATCH',
        data: {
          password: {
            id: model.get('id'),
            token: model.get('token'),
            password_reset: {
              password: model.get('password') || '',
              password_confirmation: model.get('password_confirmation') || ''
            }
          }
        }
      }).then((data) => {
        this.get('session').authenticate('authenticator:api', data.email, data.password).then(() => {
          this.transitionTo('admin');
        });
      }, (response) => {
        model.set('errors', response.responseJSON.errors);
      });
    }
  }
});
