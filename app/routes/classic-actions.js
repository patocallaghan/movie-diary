import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      outputText: ''
    };
  },
  actions: {
    buttonClicked(color) {
      console.log('buttonClicked in Route');
    }
  }
});
