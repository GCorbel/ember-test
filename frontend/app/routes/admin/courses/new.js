export default Ember.Route.extend({
  model() {
    return {};
  },
  actions: {
    saved: function(data) {
      var course = this.get('store').createRecord('course', {
        name: data.name
      })
      course.save();
    }
  }
});
