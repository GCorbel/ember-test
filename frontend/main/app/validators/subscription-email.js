import Base from 'ember-validations/validators/base';
import Ember from 'ember';

export default Base.extend({
  init: function() {
    // this call is necessary, don't forget it!
    this._super();

    this.dependentValidationKeys.pushObject('phone');
  },
  call: function() {
    var email = this.get('email');
    if(Ember.isBlank(email)) {
      if(this.get('creator')) {
        this.errors.pushObject("doit avoir une adresse email");
      } else {
        if (Ember.isBlank(this.get('phone'))) {
          this.errors.pushObject("doit inclure un numéro de téléphone ou une adresse email");
        }
      }
    } else if(!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)){
      this.errors.pushObject("doit être formatté comme une adresse email");
    }
  }
});
