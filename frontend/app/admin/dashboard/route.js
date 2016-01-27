import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return Ember.RSVP.hash({
      subscriptions: this.store.findAll('subscription'),
      courses: this.store.findAll('course'),
      amount: this.amount()
    });
  }, amount: function() {
    return new Ember.RSVP.Promise((resolve) => {
      this.store.findAll('subscription').then((subscriptions) => {
        Ember.RSVP.all(subscriptions.mapBy('course')).then(() => {
          var sum = 0;
          subscriptions.forEach((subscription) => {
            sum += parseInt(subscription.get('course.price'));
          });
          resolve(sum);
        });
      });
    });
  }
});
