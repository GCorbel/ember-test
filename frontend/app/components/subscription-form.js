import Ember from 'ember';

var loaded = false;

export default Ember.Component.extend({
  trigger: function() {
    if($('#subscription-form').length == 1 && !loaded) {
      loaded = true;
      $('#subscription-form').steps({
        headerTag: 'h3',
        bodyTag: 'Section',
        transitionEffect: 'slideLeft',
        autoFocus: true
      });
    }
  }.on('didInsertElement')
});
