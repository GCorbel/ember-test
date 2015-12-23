import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.createRecord('subscription');
  },
  actions: {
    submit: function() {
      this.controller.model.save().then(() => {
        $('.modal').modal('hide');
        this.transitionTo('admin.subscriptions');
      }, function() {});
    },
    cancel: function() {
      this.controller.model.rollbackAttributes();
      this.transitionTo('admin.subscriptions');
    }
  },
  trigger: function() {
    Ember.run.schedule('afterRender', () => {
      $('.modal').modal();
    });
  }.on('init')
});
