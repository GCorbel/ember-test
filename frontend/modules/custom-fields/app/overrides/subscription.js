import Subscription from 'tiny/models/subscription';

export default Subscription.reopen({
  customData: Ember.computed(function() {
    return {}
  })
});
