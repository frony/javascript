'use script';

const findSum = (arr, val) => {
  let searchValues = new Set();
  searchValues.add(val - arr[0]);
  for (let i = 1, length = arr.length; i < length; i++) {
    let searchVal = val - arr[i];
    if (searchValues.has(arr[i])) {
      return true;
    } else {
      searchValues.add(searchVal);
    }
  }
  return false;
};


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


function binarySearch(array, searchValue) {
  // define start, end, pivot
  let start = 0;
  let end = array.length - 1;
  let pivot = Math.floor((start + end) / 2);

  // As long as the pivot is not the search value
  // and the array is grater than 1
  // define a new start or end
  while (array[pivot] !== searchValue && start < end) {
    if (searchValue < array[pivot]) {
      // search to the left of pivot
      end = pivot - 1;
    } else {
      // search to the right of the pivot
      start = pivot + 1;
    }
    // console.log('HERE');
    // every time calculate a new pivot value
    pivot = Math.floor((start + end) / 2);
  }

  // if the current pivot is our search value
  // then, return it
  // otherwise, return false
  return array[pivot] === searchValue ? pivot : false;
}

module.exports = {
  binarySearch,
  quickSort,
  findSum,
};





