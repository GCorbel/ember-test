/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'courses-index',
  'Integration: CoursesIndexComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#courses-index}}
      //     template content
      //   {{/courses-index}}
      // `);

      this.render(hbs`{{courses-index}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
