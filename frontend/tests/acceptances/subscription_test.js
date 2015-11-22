import { describe } from 'mocha';
import { it } from 'ember-mocha';

import startApp from "../helpers/start-app";
startApp();

describe('test', function() {
  it('test', function() {
    visit('/subscriptions/new');
    fillIn('input#name', 'Name');
    click('input#submit');
  });
});
