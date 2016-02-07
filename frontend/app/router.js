import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin', function() {
    this.route('dashboard', { path: '/' });
    this.route('admin_users', function() {
      this.route('new');
      this.route('edit', { path: '/:id/edit' });
    });
    this.route('course', { path: '/course/:id/' });
    this.route('newsletter');
    this.route('courses', function() {
      this.route('new');
      this.route('edit', { path: '/:id/edit' });
    });
    this.route('subscription', { path: '/subscription/:id/' });
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
  this.route('admin_users', { path: '/admin_users/:id' }, function() {
    this.route('edit_password', {path: '/edit_password/:token'});
  });
  this.route('registration', function() {
    this.route('login', {});
    this.route('reset_password', function() {
      this.route('new');
    });
  });
  this.route('reset_password', {});
  this.route('login', {});
});

export default Router;
