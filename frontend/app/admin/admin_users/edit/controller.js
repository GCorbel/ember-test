import Ember from 'ember';

export default Ember.Controller.extend({
  columns: [
    { property: 'email', label: 'Email' },
    { property: 'password', label: 'Password', type: 'password' },
    { property: 'passwordConfirmation', label: 'Password Confirmation',
      type: 'password' },
  ]
});
