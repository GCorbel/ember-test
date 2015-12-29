import Base from 'ember-simple-auth/authorizers/base';
const { isEmpty } = Ember;

export default Base.extend({
  authorize(data, block) {
    var token = data.admin_user.access_token
    if (!isEmpty(token)) {
      const authData = `token="${token}"`;
      block('Authorization', `Token ${authData}`);
    }
  }
});
