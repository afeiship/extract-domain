var nx = require('next-js-core2');
var data = require('./dist.json');
require('../src/next-traverse');

describe('Basic test', () => {});

test('nx.traverse', function() {
  nx.traverse(
    data,
    function(index, value, target) {
      console.log(value, target.deepth);
    },
    {
      itemsKey: 'children',
      context: null
    }
  );
});
