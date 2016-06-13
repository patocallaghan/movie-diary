import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('component-lifecycle', 'Integration | Component | component lifecycle', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{component-lifecycle}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#component-lifecycle}}
      template block text
    {{/component-lifecycle}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
