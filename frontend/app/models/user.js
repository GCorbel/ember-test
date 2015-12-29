import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string', { defaultValue: '' }),
  subscriptions: DS.hasMany('subscription'),
  courses: DS.hasMany('course'),
  contacts: DS.hasMany('contact')
});
