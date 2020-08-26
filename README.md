# next-traverse
> Traverse object which has items key.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-traverse
```

## usage
```js
import '@feizheng/next-traverse';

const data = {
  tagName:'div',
  children:[
    {
      tagName:'p',
      content:'Content1'
    },
    {
      tagName:'p',
      content:'Content2'
    }
  ]
};

// walk your object/array:
nx.traverse(data,(index, value, children)=>{
  console.log(children);
}, { itemsKey: 'children'});
```

## options
| name     | type            | default | description                                           |
| -------- | --------------- | ------- | ----------------------------------------------------- |
| itemsKey | string/function | 'items' | The target children key.                              |
| context  | object          | null    | The loop context.                                     |
| inject   | boolean         | false   | If inject `independent` and `depth` to the tree item. |

## license
Code released under [the MIT license](https://github.com/afeiship/next-traverse/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-traverse
[version-url]: https://npmjs.org/package/@feizheng/next-traverse

[license-image]: https://img.shields.io/npm/l/@feizheng/next-traverse
[license-url]: https://github.com/afeiship/next-traverse/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-traverse
[size-url]: https://github.com/afeiship/next-traverse/blob/master/dist/next-traverse.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-traverse
[download-url]: https://www.npmjs.com/package/@feizheng/next-traverse
