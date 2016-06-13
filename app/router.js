import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('movies', { path: '/all-movies' }, function() {
    this.route('movie', { path: '/:movie_id' });
  });
  this.route('activity');
  this.route('my-component');
  this.route('component-lifecycle');
  this.route('event-handler');
  this.route('action-handler');
  this.route('block-component');
  this.route('array-init');
  this.route('no-observer');
  this.route('classic-actions');
});

export default Router;
