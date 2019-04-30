(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var default_options = { items: 'items'};
  var isArray = functin(target){
    return target instanceof Array;
  };

  nx.traverse = function (inTarget, inOptions) {
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.traverse;
  }

}());
