import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    buttonClicked(color) {
      console.log('buttonClicked in Application');
    }
  }
});
