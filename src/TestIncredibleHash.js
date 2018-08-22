var IncredibleHash = require('./IncredibleHash');

test = new IncredibleHash();
test.addToHash('max', 'super');
test.addToHash('javascript', 'super');


console.assert(test.getFromHash('max') === 'super');
console.assert(test.getFromHash(0) === 'max');
console.assert(test.length === 2);
