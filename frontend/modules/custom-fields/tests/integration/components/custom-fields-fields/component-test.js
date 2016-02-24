import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('custom-fields-fields', 'Integration | Component | custom fields fields', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{custom-fields-fields}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#custom-fields-fields}}
      template block text
    {{/custom-fields-fields}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
