import Base from 'ember-validations/validators/base';
import Ember from 'ember';

export default Base.extend({
  init: function() {
    // this call is necessary, don't forget it!
    this._super();

    this.dependentValidationKeys.pushObject('email');
  },
  call: function() {
    var phone = this.get('phone');
    if(Ember.isBlank(phone)) {
      if (Ember.isBlank(this.get('email'))) {
        this.errors.pushObject("doit inclure un numéro de téléphone ou une adresse de courriel");
      }
    } else if(!phone.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)){
      this.errors.pushObject("doit être formaté comme un numéro de téléphone ( 418 123 1234 )");
    }
  }
});
