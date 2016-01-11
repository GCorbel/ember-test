import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.admin_user.id)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },
  authenticate: function(email, password) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url: `${Tiny.API_HOST}/session`,
        type: 'POST',
        data: {
          session: {
            email: email,
            password: password
          }
        }
      }).then((function(response) {
        Ember.run(function() {
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
        url: `${Tiny.API_HOST}/session`,
        type: 'DELETE'
      }).always(function() {
        resolve();
      });
    });
  }
});
