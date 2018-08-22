IncredibleHash.js
===
<a href="https://www.npmjs.com/package/incrediblehash"><img src="https://pbs.twimg.com/profile_images/765333670366355456/q5ACQ8i3.jpg" width="36"></a>
<a href="https://github.com/nabokihms/incrediblehash"><img src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" width="48"></a>

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
Is it incredible, isn't it? Download and use it now!