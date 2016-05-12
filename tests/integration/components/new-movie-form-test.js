import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

moduleForComponent('new-movie-form', 'Integration | Component | new movie form', {
  integration: true
});

test('it renders', function(assert) {

  this.set('saveMovie', sinon.spy(function() {}));
  this.render(hbs`
    {{new-movie-form
      saveMovie=(action saveMovie)
    }}
  `);

  // assert.async();
  assert.ok(true);
});
