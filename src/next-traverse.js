(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var DEFAULT_OPTIONS = { itemsKey: 'items', context: null };

  nx.traverse = function(inTarget, inCallback, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var optKey = options.itemsKey;
    var walk = function(items, deepth, parent) {
      var _deepth = typeof deepth === 'undefined' ? 0 : ++deepth;
      nx.forEach(
        items,
        function(item, index) {
          var children = typeof optKey === 'string' ? nx.get(item, optKey) : optKey(item);
          item.deepth = _deepth;
          item.independent = !children || children.length === 0;
          var res = inCallback.call(this, index, item, parent);
          if (res === nx.BREAKER) return nx.BREAKER;
          !item.independent && walk(children, _deepth, item);
        },
        options.context
      );
    };

    walk(Array.isArray(inTarget) ? inTarget : [inTarget], undefined, null);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.traverse;
  }
})();
