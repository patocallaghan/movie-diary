import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    resetSiblings() {
      this.set('model.siblings.brothers', 0);
      this.set('model.siblings.sisters', 0);
    }
  }
});
