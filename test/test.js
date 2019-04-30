var nx = require('next-js-core2');
var data = require('./dist.json');
require('../src/next-traverse');

test('nx.traverse', function() {
  nx.traverse(
    data,
    function(index, value, target) {
      console.log(value, target.deep);
    },
    null,
    {
      itemsKey: 'children'
    }
  );
});
