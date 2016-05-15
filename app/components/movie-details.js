import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    cancel() {
      this.set('edit', false);
    },
    edit() {
      this.set('edit', true);
    }
  }
});
