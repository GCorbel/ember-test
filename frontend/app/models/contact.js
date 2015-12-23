import DS from 'ember-data';

export default DS.Model.extend({
  fullname: DS.attr('sting', { defaultValue: '' }),
  phone: DS.attr('sting', { defaultValue: '' }),
  email: DS.attr('sting', { defaultValue: '' }),
  user: DS.belongsTo('user')
});
