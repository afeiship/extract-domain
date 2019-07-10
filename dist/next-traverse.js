/*!
 * name: next-traverse
 * link: https://github.com/afeiship/next-traverse
 * version: 1.0.0
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var DEFAULT_OPTIONS = { itemsKey: 'items', context: null };
  var isArray = function(target) {
    return target instanceof Array;
  };

  nx.traverse = function(inTarget, inCallback, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var optKey = options.itemsKey;
    var walk = function(items, deepth, parent) {
      var _deepth = typeof deepth === 'undefined' ? 0 : ++deepth;
      items.forEach(function(item, index) {
        var children = item[optKey];
        item.deepth = _deepth;
        item.independent = !children || children.length === 0;
        inCallback.call(this, index, item, parent);
        if (!item.independent) {
          walk(children, _deepth, item);
        }
      }, options.context);
    };

    walk(isArray(inTarget) ? inTarget : [inTarget], undefined, null);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.traverse;
  }
})();
