'use strict';

const arr = [1,2,3,[4,5, [6,7,8]]];

function flatten(array) {
  return array.reduce((prev, curr) => {
    return prev.concat(Array.isArray(curr) ? flatten(curr) : curr);
  }, []);
}

console.log(flatten(arr));