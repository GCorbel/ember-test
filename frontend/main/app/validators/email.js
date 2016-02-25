import Base from 'ember-validations/validators/base';

export default Base.extend({
  call: function(){
    var email = this.model.get(this.property);
    if(!email){
      this.errors.pushObject("doit avoir un email");
    } else if(!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)){
      this.errors.pushObject("doit être formatté comme un email");
    }
  }
});
