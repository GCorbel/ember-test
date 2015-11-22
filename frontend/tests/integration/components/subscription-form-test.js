/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'subscription-form',
  'Integration: SubscriptionFormComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#subscription-form}}
      //     template content
      //   {{/subscription-form}}
      // `);

      this.render(hbs`{{subscription-form}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
