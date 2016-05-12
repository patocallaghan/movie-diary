import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveMovie(movie) {
      return this.store.createRecord('movie', movie).save();
    }
  }
});
