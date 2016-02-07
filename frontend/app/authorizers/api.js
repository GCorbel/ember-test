import Base from 'ember-simple-auth/authorizers/base';
const { isEmpty } = Ember;

export default Base.extend({
  authorize(data, block) {
    var token = data.admin_user.access_token;
    if (!isEmpty(token)) {
      block('Authorization', `Token token="${token}"`);
    }
  }
});
