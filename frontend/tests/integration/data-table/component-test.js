/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'data-table',
  'Integration: DataTableComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#data-table}}
      //     template content
      //   {{/data-table}}
      // `);

      this.render(hbs`{{data-table}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
