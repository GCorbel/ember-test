/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'admin-courses-index',
  'Integration: AdminCoursesIndexComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#admin-courses-index}}
      //     template content
      //   {{/admin-courses-index}}
      // `);

      this.render(hbs`{{admin-courses-index}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
