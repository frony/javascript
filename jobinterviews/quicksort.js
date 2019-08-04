'use strict';

function quickSort(array) {
  const length = array.length;
  // base case
  if (length <= 1) {
    return array;
  }

  // set pivot, left and right arrays
  let pivot = array[0];
  let left = [];
  let right = [];

  // loop through array
  // and push to the left what is lower than pivot
  // and push to the right what is higher than pivot
  for (let i = 0; i < length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  // repeat until sorted
  return quickSort(left).concat(pivot, quickSort(right));
}