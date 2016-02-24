import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.admin_user.id)) {
        Ember.$.ajaxSetup({
          headers: {
            'Authorization': `Token token="${data.admin_user.access_token}"`
          }
        });
        resolve(data);
      } else {
        reject();
      }
    });
  },
  authenticate: function(email, password) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url: `${Tiny.API_HOST}${Tiny.API_NAMESPACE}/session`,
        type: 'POST',
        data: {
          session: {
            email: email,
            password: password
          }
        }
      }).then((function(response) {
        Ember.run(function() {
          Ember.$.ajaxSetup({
            headers: {
              'Authorization': `Token token="${response.admin_user.access_token}"`
            }
          });
          resolve(response);
        });
      }), function(xhr, status, error) {
        Ember.run(function() {
          console.log(JSON.stringify(xhr));
          reject(xhr.responseJSON);
        });
      });
    });
  },
  invalidate: function(data) {
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.$.ajax({
        url: `${Tiny.API_HOST}${Tiny.API_NAMESPACE}/session`,
        type: 'DELETE'
      }).always(function() {
        Ember.$.ajaxSetup({
          headers: {
            'Authorization': `Token token="None"`
          }
        });
        resolve();
      });
    });
  }
});
