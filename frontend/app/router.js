import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin', function() {
    this.route('users', function() {
      this.route('new');
      this.route('edit', { path: '/:id/edit' });
    });
    this.route('courses', function() {
      this.route('new');
      this.route('edit', { path: '/:id/edit' });
    });
    this.route('subscriptions', function() {
      this.route('new');
      this.route('edit', { path: '/:id/edit' });
    });
  });
  this.route('subscriptions', { path: '/'}, function() {
    this.route('new', { path: '/' });
    this.route('payment', { path: '/:id/payment' });
    this.route('success', {});
  });
  this.route('login', {});
});

export default Router;
