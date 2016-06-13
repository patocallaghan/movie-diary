import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      name: `Pat O'Callaghan`,
      title: "Product Engineer"
    }
  }
});
