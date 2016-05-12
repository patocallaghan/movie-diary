import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    this.store.findRecord('movie', params.movie_id);
  },
  // afterModel(model) {
  //   return Ember.$.ajax({
  //     url: `http://www.omdbapi.com/?t=cloverfield&plot=short&r=json`
  //   }).then(function(response) {
  //       this.controllerFor('movies').set('movieDetails', response);
  //   }.bind(this));
  // },
  actions: {
    deleteMovie() {
      var controller = this.controller;
      controller.get('model').destroyRecord().then(function() {
        controller.transitionToRoute('movies');
      });
    }
  }
});
