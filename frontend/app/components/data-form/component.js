import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {
  actions: {
    submit: function() {
      this.controller.model.save().then(() => {
        $('.modal').modal('hide');
        this.sendAction('submit');
      }, function() {});
    },
    cancel: function() {
      this.controller.model.rollbackAttributes();
      this.sendAction('cancel');
    }
  },
  trigger: function() {
    Ember.run.schedule('afterRender', () => {
      $('.modal').modal();
    });
  }.on('init')
});
