# next-traverse
> Traverse object which has items key

## install:
```bash
npm install -S afeiship/next-traverse --registry=https://registry.npm.taobao.org
```

## usage:
```js
import nxTraverse from 'next-traverse';
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
}

// walk your object/array:
nxTraverse(data,(index, value, children)=>{
  console.log(children);
}, null, { itemsKey: 'children'});
```
