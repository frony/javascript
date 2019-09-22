'use strict';

const array = [1,2,3,[4,5, [6,7,8]]];

console.log(array.includes(6));

function flatten(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flatten(curr) : curr);
  }, []);
}

// console.log(flatten(array));

function flatten2(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flatten(curr));
    } else {
      return acc.concat(curr);
    }
    // return acc.concat(Array.isArray(curr) ? flatten(curr) : curr);
  }, []);
}

console.log(flatten2(array));