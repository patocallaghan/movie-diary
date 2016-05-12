import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleted() {
      this.attrs.deleteMovie();
    }
  }
});
