var nx = require('next-js-core2');
require('../src/next-traverse');

describe('Basic test', () => {
  var data = {
    type: 'element',
    tagName: 'p',
    attributes: [],
    expDeepth: 0,
    children: [
      { type: 'text', content: '\n    2019年版第五套人民币50元、', expDeepth: 1 },
      {
        type: 'element',
        tagName: 'span',
        attributes: [
          { key: 'style', value: 'color:#0059FF' },
          { key: 'class', value: 'tss-color' }
        ],
        children: [{ type: 'text', content: '20元、10', expDeepth: 2 }],
        expDeepth: 1
      },
      { type: 'text', content: '元、1', expDeepth: 1 },
      {
        type: 'element',
        tagName: 'span',
        attributes: [
          { key: 'style', value: 'background-color:#87DBF7' },
          { key: 'class', value: 'tss-background-color' }
        ],
        children: [{ type: 'text', content: '元纸币和1元', expDeepth: 2 }],
        expDeepth: 1
      }
    ]
  };

  test('Travese item deepth equal expect', function() {
    nx.traverse(
      data,
      function(index, value, target) {
        expect(value.deepth).toBe(value.expDeepth);
      },
      {
        itemsKey: 'children'
      }
    );
  });
});
