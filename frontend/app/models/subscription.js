import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr(),
  user: DS.belongsTo('user'),
  courseId: DS.attr(),
  course: DS.belongsTo('course'),
  paid: DS.attr('boolean', { defaultValue: false })
});
