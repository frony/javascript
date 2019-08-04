'use strict';

function binarySearch(array, search) {
  // set start, end and pivot
  let start = 0;
  let end = array.length - 1;
  let pivot = Math.floor((start + end) / 2);

  // loop while the value is not found and
  // while there are more than one item
  while (array[pivot] !== search && start < end) {
    if (search > array[pivot]) {
      start = pivot + 1;
    } else {
      end = pivot -1;
    }
    // recalculate pivot
    pivot = Math.floor((start + end) / 2);
  }

  return array[pivot] === search ? pivot : false;
}