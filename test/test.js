var nx = require('next-js-core2');
require('../src/next-traverse');

describe('Basic test', () => {
  var data = {
    type: 'element',
    tagName: 'p',
    attributes: [],
    __expDeepth: 0,
    __expIndependent: false,
    children: [
      {
        type: 'text',
        content: '\n    2019年版第五套人民币50元、',
        __expDeepth: 1,
        __expIndependent: true
      },
      {
        type: 'element',
        tagName: 'span',
        attributes: [
          { key: 'style', value: 'color:#0059FF' },
          { key: 'class', value: 'tss-color' }
        ],
        children: [{ type: 'text', content: '20元、10', __expDeepth: 2, __expIndependent: true }],
        __expDeepth: 1,
        __expIndependent: false
      },
      { type: 'text', content: '元、1', __expDeepth: 1, __expIndependent: true },
      {
        type: 'element',
        tagName: 'span',
        attributes: [
          { key: 'style', value: 'background-color:#87DBF7' },
          { key: 'class', value: 'tss-background-color' }
        ],
        children: [
          { type: 'text', content: '元纸币和1元', __expDeepth: 2, __expIndependent: true }
        ],
        __expDeepth: 1,
        __expIndependent: false
      }
    ]
  };

  test('Travese item deepth equal expect:', function() {
    nx.traverse(
      data,
      function(index, value, target) {
        expect(value.deepth).toBe(value.__expDeepth);
      },
      {
        itemsKey: 'children'
      }
    );
  });
  test('Travese item deepth equal independent:', function() {
    nx.traverse(
      data,
      function(index, value, target) {
        expect(value.independent).toBe(value.__expIndependent);
      },
      {
        itemsKey: 'children'
      }
    );
  });
});
