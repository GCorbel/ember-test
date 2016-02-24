import Subscription from 'tiny/models/subscription';
import DS from 'ember-data';

export function initialize(applicationInstance) {
  Subscription.reopen({
    customData: DS.attr({ defaultValue: {} })
  });
}

export default {
  name: 'modify-models',
  initialize
};
