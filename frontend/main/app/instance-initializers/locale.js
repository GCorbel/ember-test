import Ember from 'ember';
const { getOwner } = Ember;

export function initialize(application) {
  let i18n = application.lookup('service:i18n');
  i18n.set('locale', 'fr'); //set your default locale or compute it
  Ember.I18n = i18n;
}

export default {
  name: 'locale',
  initialize: initialize
};
