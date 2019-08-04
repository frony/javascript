'use strict';

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  // Step 1: and divide the array in half
  const pivot = Math.floor(array.length / 2);
  const left = array.slice(0, pivot);
  const right = array.slice(pivot);

  // step 2: sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // step 3: merge the sorted halves
  const sortedArray = [];
  let currentLeftIndex = 0;
  let currentRightIndex = 0;

  while (sortedArray.length < left.length + right.length) {
    // sortedLeft's first element comes next
    // if it's less than sortedRight's first element
    // or if sortedRight is exhausted
    if (currentLeftIndex < left.length &&
      (currentRightIndex === right.length) ||
      sortedLeft[currentLeftIndex] < sortedRight[currentRightIndex]) {
      sortedArray.push(sortedLeft[currentLeftIndex]);
      currentLeftIndex++;
    } else {
      sortedArray.push(sortedRight[currentRightIndex]);
      currentRightIndex++;
    }
  }

  return array;
}