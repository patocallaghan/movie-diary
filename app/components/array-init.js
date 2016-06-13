import Ember from 'ember';

export default Ember.Component.extend({
  cache: [],
  // setup: Ember.on('init', function() {
  //   this.set('cache', []);
  // }),
  actions: {
    insert() {
      this.get('cache').pushObject(this.get('number'));
    }
  }
});
