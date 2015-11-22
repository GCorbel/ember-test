export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      user: this.store.createRecord('user'),
      subscription: this.store.createRecord('subscription')
    });
  },
  actions: {
    submit: function() {
      this.model.save()
    }
  },
});
