IncredibleHash.js
=================

Implementation of this dirty hack:
```javascript
arr = [];
arr.push('max');
arr['max'] = 'super';
console.log(arr);
//['max', 'max': 'super']
console.log(arr.length);
//1
```

Example:
```javascript
var IncredibleHash = require('incrediblehash');

map = new IncredibleHash();
map.addToHash('max', 'super');
console.log(map.getFromHash('max'));
//'super'
console.log(map.getFromHash(0));
//'max'
console.log(map.length);
//1
```
Is it incredible, isn't it?
