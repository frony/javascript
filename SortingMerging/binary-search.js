'use strict';

function binarySearch(array, searchValue) {
  // define start, end, pivot
  let start = 0;
  let end = array.length - 1;
  let pivot = Math.floor((start + end) / 2);
  
  // As long as the pivot is not the search value
  // and the array is grater than 1
  // define a new start or end
  while (array[pivot] !== searchValue && start < end) {
    // console.log(`pivot: ${pivot}`);
    // console.log(`array[pivot]: ${array[pivot]}`);
    if (searchValue < array[pivot]) {
      // search to the left of pivot
      end = pivot - 1;
    } else {
      // search to the right of the pivot
      start = pivot + 1;
    }
    // every time calculate a new pivot value
    pivot = Math.floor((start + end) / 2);
  }

  // if the current pivot is our search value
  // then, return it
  // otherwise, return false
  return array[pivot] === searchValue ? pivot : false;
}

module.exports = binarySearch;