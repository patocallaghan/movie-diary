import Ember from 'ember';

export default Ember.Controller.extend({
  sortBy: 'id',
  queryParams: ['sortBy'],
  sortingOptions: [{
    id: 'dateWatched',
    title: 'Date Watched'
  }],
  sortedMovies: Ember.computed.sort('model', 'queryParams')
});
