/*!
 * name: @jswork/next-traverse
 * description: Traverse object which has items key.
 * homepage: https://github.com/afeiship/next-traverse
 * version: 1.0.0
 * date: 2020-11-20 13:05:40
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = { itemsKey: 'children', context: null, inject: false };
  var UNDEFINED = 'undefined';
  var STRING = 'string';

  nx.traverse = function (inTarget, inCallback, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var optKey = options.itemsKey;
    var walk = function (items, depth, parent) {
      var depth = typeof depth === UNDEFINED ? 0 : ++depth;
      nx.forEach(items, function (item, index) {
        var children =
          typeof optKey === STRING ? nx.get(item, optKey) : optKey(index, item, parent);
        var independent = !children || children.length === 0;
        options.inject && nx.mix(item, { depth: depth, independent: independent });
        var res = inCallback.call(options.context, index, item, parent);
        if (res === nx.BREAKER) return res;
        !independent && walk(children, depth, item);
      });
    };

    walk(Array.isArray(inTarget) ? inTarget : [inTarget], undefined, null);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.traverse;
  }
})();
