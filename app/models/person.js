import Computed from 'movie-diary/lib/computed';
export default Ember.Object.extend({
  name: 'No Name',
  init() {
    this.set('siblings', {
      brothers: 0,
      sisters: 0,
    });
    this.setProperties({
      brothersNames: [],
      sistersNames: []
    });
  },
  // siblingsCount: Computed.sum('siblings.brothers', 'siblings.sisters'),
  siblingsCount: Ember.computed('siblings.{brothers,sisters}', function() {
    return parseInt(this.get('siblings.brothers') || 0, 10)  + parseInt(this.get('siblings.sisters') || 0, 10);
  }),
  // siblingsObserver: Ember.observer('siblings.{brothers,sisters}', function() {
  //   console.log('siblings.brothers', this.get('siblings.brothers'));
  //   console.log('siblings.sisters', this.get('siblings.sisters'));
  // }),
  say() {
    console.log('Hello');
  }
})
