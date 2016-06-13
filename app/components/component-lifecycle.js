import Ember from 'ember';

export default Ember.Component.extend({
  isNameUpdated: false,
  isTitleUpdated: false,
  onInit: Ember.on('init', function() {
    console.log('init');
  }),
  onWillUpdate: Ember.on('willUpdate', function() {
    console.log('willUpdate');
  }),
  onWillRender: Ember.on('willRender', function() {
    console.log('willRender');
    // this.$('.empty-content').text('Inserted Content');
  }),
  onDidInsertElement: Ember.on('didInsertElement', function() {
    console.log('didInsertElement');
    this.$('.empty-content').text('Manually Inserted Content');
  }),
  onDidUpdate: Ember.on('didUpdate', function() {
    console.log('didUpdate');
  }),
  onDidRender: Ember.on('didRender', function() {
    console.log('didRender');
    console.log('---------------------');
  }),
  onDidInitAttrs: Ember.on('didInitAttrs', function(attrs) {
    console.log('didInitAttrs', attrs);
  }),
  onDidReceiveAttrs: Ember.on('didReceiveAttrs', function(attrs) {
    console.log('didReceiveAttrs', attrs);
  }),
  onDidUpdateAttrs: Ember.on('didUpdateAttrs', function(attrs) {
    this.set('isNameUpdated', attrs.newAttrs.name.value !== attrs.oldAttrs.name.value);
    this.set('isTitleUpdated', attrs.newAttrs.title.value !== attrs.oldAttrs.title.value);
    console.log('didUpdateAttrs', attrs);
  }),
  onWillDestroyElement: Ember.on('willDestroyElement', function() {
    console.log('willDestroyElement');
  }),
  onWillClearRender: Ember.on('willClearRender', function() {
    console.log('willClearRender');
  }),
  onDidDestroyElement: Ember.on('didDestroyElement', function() {
    console.log('didDestroyElement');
    console.log('---------------------');
  })
});
