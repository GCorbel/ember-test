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
        this.errors.pushObject("must have an email address or a phone number");
      }
    } else if(!phone.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)){
      this.errors.pushObject("must be formatted like a phone number ( 418 123 1234 )");
    }
  }
});
