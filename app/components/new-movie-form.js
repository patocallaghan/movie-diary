import Ember from 'ember';

export default Ember.Component.extend({
  title: '',
  review: '',
  rating: null,
  dateWatched: null,
  savedMovie: null,
  ratingOptions: [{id: 1, title: '1 star'},{id: 2, title: '2 stars'},{id: 3, title: '3 stars'},{id: 4, title: '4 stars'},{id: 5, title: '5 stars'}],
  isSaveEnabled: Ember.computed('title', 'review', 'rating', function() {
    return this.get('title') && this.get('review') && this.get('rating');
  }),
  isSaveDisabled: Ember.computed.not('isSaveEnabled'),
  movieDetails: Ember.computed('title', 'review', 'rating', 'dateWatched', function() {
    return {
      title: this.get('title'),
      review: this.get('review'),
      rating: this.get('rating'),
      dateWatched: this.get('dateWatched')
    };
  }),
  resetMovieDetails() {
    this.setProperties({
      title: '',
      review: '',
      rating: null,
      dateWatched: null,
    });
  },
  actions: {
    submit() {
      this.attrs.saveMovie(this.get('movieDetails')).then((movie) => {
        console.log(movie);
        this.resetMovieDetails();
        this.set('savedMovie', movie);
        this.set('showSuccessScreen', true);
      });
    }
  }
});
