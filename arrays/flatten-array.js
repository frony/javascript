'use strict';

const array = [1,2,3,[4,5, [6,7,8]]];

function flatten(arr) {
  return arr.reduce((prev, curr) => {
    return prev.concat(Array.isArray(curr) ? flatten(curr) : curr);
  }, []);
}

console.log(flatten(array));