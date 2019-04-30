var nx = require('next-js-core2');
require('../src/next-traverse');


test('nx.traverse', function () {
  var obj1 = {name: 'fei'};
  var obj2 = {email: '1290657123@qq.com'};

  var result = {};

  nx.traverse(result, obj1, obj2);

  expect(result.name, obj1.name).toBe(null);
});

