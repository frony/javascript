const assert = require('assert');

/**
 * @param {String} original
 * @returns {String} `original`, reversed.
 */
function reverseString(original) {
  // TODO

  if (!original || original.length <= 1 ) {
    return original;
  }

  const arr = original.split('');
  const length = arr.length;


  const newArr = [];
  for (let i = length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr.join('');
}

String.prototype.reverse = function() {
  return reverseString(this);
};

assert.equal(reverseString('abc'), 'cba');
assert.equal(reverseString(''), '');
assert.equal(reverseString('ab'), 'ba');
assert.equal(reverseString('a'), 'a');
assert.equal(reverseString(null), null);
// assert.equal(reverseString(42), ...);

// TODO

assert.equal('abc'.reverse(), 'cba');
