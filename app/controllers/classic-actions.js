import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    buttonClicked(color) {
      console.log('buttonClicked in Controller');
      this.set('outputText', color);
    }
  }
});
