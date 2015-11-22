export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('course', params.id);
  },
  actions: {
    saved: function(course) {
      course.save();
    }
  }
});
