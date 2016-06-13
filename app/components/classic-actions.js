import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    buttonClicked(color) {
      // this.set('outputText', color);
      this.sendAction('buttonClicked', color);
      console.log('buttonClicked in Component');
    }
  }
});
