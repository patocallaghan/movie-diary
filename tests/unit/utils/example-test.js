import { module, test } from 'qunit';

module('Unit | Utility | example', {
  beforeEach() {
    console.log('beforeEach');
  },
  afterEach() {
    console.log('afterEach');
  }
});

test('QUnit assertions', function(assert) {
  console.log('start test');
  assert.expect(8);

  assert.ok(true, 'is true');
  assert.notOk(false, 'is false');

  assert.equal( 1, 1, 'is equal');
  assert.notEqual(2, 1, 'is not equal');

  assert.strictEqual( 1, 1, 'is strict equal');
  assert.notStrictEqual('1', 1, 'is not strict equal');

  assert.deepEqual( [1], [1], 'is deep equal');
  assert.notDeepEqual([1,2], [1], 'is not deep equal');
  console.log('end test');
});

module('Unit | Utility | example 2', {
  beforeEach() {
    console.log('beforeEach 2');
  },
  afterEach() {
    console.log('afterEach 2');
  }
});

test('QUnit assertions 2', function(assert) {
  console.log('start test');
  assert.expect(8);

  assert.ok(true, 'is true');
  assert.notOk(false, 'is false');

  assert.equal( 1, 1, 'is equal');
  assert.notEqual(2, 1, 'is not equal');

  assert.strictEqual( 1, 1, 'is strict equal');
  assert.notStrictEqual('1', 1, 'is not strict equal');

  assert.deepEqual( [1], [1], 'is deep equal');
  assert.notDeepEqual([1,2], [1], 'is not deep equal');
  console.log('end test');
});

