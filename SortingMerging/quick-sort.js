'use strict';

function quickSort(array) {
  // if there is only one element, return
  if (array.length <= 1) {
    return array;
  }

  // create pivot, left and right arrays
  let pivot = array[0];
  let left = [];
  let right = [];

  // iterate through array
  // sorting values higher than pivot to right array
  // and values lower than pivot to the left array
  for (let i = 1, len = array.length; i < len; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  // repeat until all sorted
  return quickSort(left).concat(pivot, quickSort(right));
}

module.exports = quickSort;