import DS from 'ember-data';

export default DS.Model.extend({
  fullname: DS.attr('string', { defaultValue: '' }),
  phone: DS.attr('string', { defaultValue: '' }),
  email: DS.attr('string', { defaultValue: '' }),
  user: DS.belongsTo('user')
});
