import Ember from 'ember';
import Person from 'movie-diary/models/person';

export default Ember.Route.extend({
  model() {
    return Person.create({ name: 'Jon' });
  }
});
