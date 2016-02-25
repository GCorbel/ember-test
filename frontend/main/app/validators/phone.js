import Base from 'ember-validations/validators/base';

export default Base.extend({
  call: function(){
    var phone = this.model.get(this.property);
    if(Ember.isBlank(phone)) {
      this.errors.pushObject("doit inclure un numéro de téléphone");
    } else if(!phone.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)){
      this.errors.pushObject("doit être formaté comme un numéro de téléphone ( 418 123 1234 )");
    }
  }
});
