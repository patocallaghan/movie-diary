let Computed = {};

let { computed, get } = Ember

Computed.sum = function(dependentKey, otherKey) {
  return computed(dependentKey, otherKey, function() {
    return parseInt(get(this, dependentKey) || 0, 10)  + parseInt(get(this, otherKey)|| 0, 10);
  });
};

export default Computed;
