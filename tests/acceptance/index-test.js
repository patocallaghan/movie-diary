import { test } from 'qunit';
import moduleForAcceptance from 'movie-diary/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /index', function(assert) {
  console.log('1');
  visit('/');
  fillIn('input:first', 'Cloverfield')
  console.log('2');
  fillIn('textarea:first', 'It was amazing!')
  andThen(function() {
    console.log('3');
  });
  andThen(function() {
    console.log('4')
    assert.equal(currentURL(), '/');
  });
  console.log('5')
});

test('visiting /index', function(assert) {
  visit('/');
  fillIn('input[type=text]', 'Cloverfield');
  fillIn('textarea', 'Da bomb');
  fillIn('select', '1');
  click('button');
  $.mockjax({
    url: '/movies',
    type: 'POST',
    responseText: JSON.stringify({
      "data": {
        "type": "movies",
        "id": Math.floor(Math.random()*100),
        "attributes": {
          "title": "Cloverfield",
          "rating": 5,
          "review": "This was the shit!",
          "date-watched": Date.now()
        }
      }
    })
  })
  andThen(function() {
    assert.ok(find('.alert-success:visible').length);
  });
});

