import Ember from 'ember';

export default Ember.Route.extend({
  // afterModel(model) {
  //   return Ember.$.ajax({
  //     url: `http://www.omdbapi.com/?t=cloverfield&plot=short&r=json`
  //   }).then(function(response) {
  //       this.controllerFor('movies').set('movieDetails', response);
  //   }.bind(this));
  // },
  actions: {
    updateMovie(movieUpdates) {
      let movie = this.controller.get('model');
      movie.setProperties(movieUpdates)
      movie.save()
        .then(() => this.transitionTo('movies.movie', movie, { queryParams: { edit: false }}));
    },
    deleteMovie() {
      let controller = this.controller;
      controller.get('model').destroyRecord().then(function() {
        controller.transitionToRoute('movies');
      });
    }
  }
});
