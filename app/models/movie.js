import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  rating: attr('number'),
  review: attr('string'),
  dateWatched: attr('date')
});
