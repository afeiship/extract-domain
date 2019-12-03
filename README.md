# next-traverse
> Traverse object which has items key.

## installation
```bash
npm install -S @feizheng/next-traverse
```

## usage:
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

## resources
- https://stackoverflow.com/questions/9385560/recursive-functions-in-javascript-and-depth-tracking

## todos
- [ ] itemsKey should be functional
- [ ] traverse should not change the data
- [ ] pass ({ item,index, ...props }) to callback should be better
