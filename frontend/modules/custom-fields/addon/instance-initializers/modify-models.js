// import ApplicationSerializer from 'tiny/serializers/application';
// import Subscription from 'tiny/models/subscription';
// import DS from 'ember-data';
//
// export function initialize(applicationInstance) {
//   ApplicationSerializer.reopen({
//     serialize: function(snapshot, options) {
//       var json = this._super(...arguments);
//       json['custom_data'] = snapshot.record.get('customData');
//       return json;
//     }
//   });
//
//   Subscription.reopen({
//     customData: Ember.computed(function() {
//       return {}
//     })
//   });
// }
//
// export default {
//   name: 'modify-models',
//   after: 'ember-data',
//   initialize
// };
