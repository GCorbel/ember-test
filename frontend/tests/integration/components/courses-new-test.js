/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'courses-new',
  'Integration: CoursesNewComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#courses-new}}
      //     template content
      //   {{/courses-new}}
      // `);

      this.render(hbs`{{courses-new}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
