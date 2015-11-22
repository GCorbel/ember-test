/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'course/index-table',
  'Integration: CourseIndexTableComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#course/index-table}}
      //     template content
      //   {{/course/index-table}}
      // `);

      this.render(hbs`{{course/index-table}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
