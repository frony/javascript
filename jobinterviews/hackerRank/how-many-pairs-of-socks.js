'use strict';

const socks = [1, 2, 1, 2, 1, 3, 2];
const bigSocks = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function howManyPairsOfSocks(array) {
  let sockSet = new Set();
  let matchingPairs = 0;

  for (let i = 0, maxLen = array.length; i < maxLen; i++) {
    if (sockSet.has(array[i])) {
      sockSet.delete(array[i]);
      matchingPairs++;
    } else {
      sockSet.add(array[i]);
    }
  }

  return matchingPairs;
}

console.log(howManyPairsOfSocks(socks));
console.log(howManyPairsOfSocks(bigSocks));