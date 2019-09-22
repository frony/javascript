'use strict';

const array = [10, 7, 5, 8, 11, 9];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let left = [];
  let right = [];
  let pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

const sortedArray = quickSort(array);
console.log(sortedArray);


function binarySearch(arr, searchItem) {
  if (arr.length === 1) {
    return arr;
  }

  let start = 0;
  let end = arr.length - 1;
  let pivot = Math.floor((end + start) / 2);

  while (searchItem !== arr[pivot] && start < end) {
    if (searchItem > arr[pivot]) {
      start = pivot + 1;
    } else {
      end = pivot - 1;
    }

    pivot = Math.floor((end + start) / 2);
  }

  return searchItem === arr[pivot] ? pivot : false;
}

console.log(binarySearch(sortedArray, 9));
console.log(binarySearch(sortedArray, 5));
console.log(binarySearch(sortedArray, 1));