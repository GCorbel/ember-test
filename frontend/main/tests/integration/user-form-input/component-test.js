/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'user-form-input',
  'Integration: UserFormInputComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#user-form-input}}
      //     template content
      //   {{/user-form-input}}
      // `);

      this.render(hbs`{{user-form-input}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
