import Ember from 'ember';

export default Ember.Controller.extend({
  courseOptions:(function() {
    return this.store.findAll('course')
  }).property('courseOptions')
});
