const nx = require('@feizheng/next-js-core2');
require('../src/next-traverse');

describe('Basic test', () => {
  var data = {
    type: 'element',
    tagName: 'p',
    attributes: [],
    __expdepth: 0,
    __expIndependent: false,
    children: [
      {
        type: 'text',
        content: '\n    2019年版第五套人民币50元、',
        __expdepth: 1,
        __expIndependent: true
      },
      {
        type: 'element',
        tagName: 'span',
        attributes: [
          { key: 'style', value: 'color:#0059FF' },
          { key: 'class', value: 'tss-color' }
        ],
        children: [{ type: 'text', content: '20元、10', __expdepth: 2, __expIndependent: true }],
        __expdepth: 1,
        __expIndependent: false
      },
      { type: 'text', content: '元、1', __expdepth: 1, __expIndependent: true },
      {
        type: 'element',
        tagName: 'span',
        attributes: [
          { key: 'style', value: 'background-color:#87DBF7' },
          { key: 'class', value: 'tss-background-color' }
        ],
        children: [{ type: 'text', content: '元纸币和1元', __expdepth: 2, __expIndependent: true }],
        __expdepth: 1,
        __expIndependent: false
      }
    ]
  };

  test('Travese item depth equal expect:', function () {
    nx.traverse(
      data,
      function (index, value, target) {
        expect(value.depth).toBe(value.__expdepth);
      },
      {
        inject: true,
        itemsKey: 'children'
      }
    );
  });
  test('Travese item depth equal independent:', function () {
    nx.traverse(
      data,
      function (index, value, target) {
        expect(value.independent).toBe(value.__expIndependent);
      },
      {
        inject: true,
        itemsKey: 'children'
      }
    );
  });

  test('Travese item itemsKey is funtion:', function () {
    nx.traverse(
      data,
      function (index, value, target) {
        expect(value.depth).toBe(value.__expdepth);
        expect(value.independent).toBe(value.__expIndependent);
      },
      {
        inject: true,
        itemsKey: function (item) {
          return item.children;
        }
      }
    );
  });
});
