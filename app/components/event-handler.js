import Ember from 'ember';

export default Ember.Component.extend({
  clickedElement: 'nothing yet',
  hasClicked: false,
  keyDown(e) {
    this.set('keyCode', e.which);
  },
  click(e) {
    this.toggleProperty('hasClicked');
    this.set('clickedElement', `the ${e.target.tagName} tag`);
  },
  mouseMove(e) {
    this.setProperties({
      xPos: e.pageX,
      yPos: e.pageY
    })
  },
  paste(e) {
    let clipboardData = e.originalEvent.clipboardData || window.clipboardData;
    let text = clipboardData.getData('text/plain') || clipboardData.getData('Text');
    this.set('pastedContent', text);
  }
});
