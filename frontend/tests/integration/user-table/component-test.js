/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'user-table',
  'Integration: UserTableComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#user-table}}
      //     template content
      //   {{/user-table}}
      // `);

      this.render(hbs`{{user-table}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);