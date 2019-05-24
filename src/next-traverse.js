(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var DEFAULT_OPTIONS = { itemsKey: 'items' };
  var isArray = function(target) {
    return target instanceof Array;
  };

  nx.traverse = function(inTarget, inCallback, inContext, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var walk = function(items) {
      items.forEach(function(item, index) {
        inCallback.call(this, index, item, items);
        var children = item[options.itemsKey];
        if (children && children.length) {
          walk(children);
        }
      }, inContext);
    };

    walk(isArray(inTarget) ? inTarget : [inTarget]);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.traverse;
  }
})();
