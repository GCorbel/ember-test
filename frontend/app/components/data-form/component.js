import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {
  model: null,
  actions: {
    submit: function() {
      this.model.validate().then(() => {
        this.model.save().then(() => {
          $('.modal').modal('hide');
          this.sendAction('submit');
        }, function() {});
      }).catch(() => {
        this.model.showErrors();
      });
    },
    cancel: function() {
      this.model.rollbackAttributes();
      this.sendAction('cancel');
    }
  },
  trigger: function() {
    Ember.run.schedule('afterRender', () => {
      $('.modal').modal().on('hidden.bs.modal', () => {
        this.send('cancel');
      });
    });
  }.on('init')
});
