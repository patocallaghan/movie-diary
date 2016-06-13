import Ember from 'ember';

export default Ember.Component.extend({
  searchTermChanged: Em.on('init', Em.observer('searchTerm', function() {
    if (this.get('searchTerm')) {
      Em.run.debounce(this, this.fetchSearch, 500);
    }
  })),
  // didReceiveAttrs(attrs) {
  //   if (!attrs.oldAttrs || attrs.newAttrs.searchTerm.value !== attrs.oldAttrs.searchTerm.value) {
  //     Em.run.debounce(this, this.fetchSearch, 500);
  //   }
  // },
  fetchSearch() {
    return Ember.$.ajax({
      url: `http://www.omdbapi.com/?t=${this.get('searchTerm')}&plot=short&r=json&page=1`
    }).then(movie => this.set('movie', movie));
  }
});
