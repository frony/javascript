'use strict';

const array1 = [3, 4, 6, 10, 11, 15];
const array2 = [1, 5, 8, 12, 14, 19];

function mergeArrray(arrL, arrR) {
  let currentLeftIndex = 0;
  let currentRightIndex = 0;

  let arrResult = [];

  while (arrResult.length < arrL.length + arrR.length) {
    if (currentLeftIndex < arrL.length
      && (currentRightIndex === arrR.length
        || arrL[currentLeftIndex] < arrR[currentRightIndex])) {
      arrResult.push(arrL[currentLeftIndex]);
      currentLeftIndex++;
    } else {
      arrResult.push(arrR[currentRightIndex]);
      currentRightIndex++;
    }
  }











/*

  while (arrResult.length < arrL.length + arrR.length) {
    // if the first element of arrL is next
    // and if it's less than arrR element
    // or if arrR is exhausted
    if (currentLeftIndex < arrL.length &&
      (arrR.length === currentRightIndex || arrL[currentLeftIndex] < arrR[currentRightIndex])) {
      arrResult.push(arrL[currentLeftIndex]);
      currentLeftIndex++;
    } else {
      arrResult.push(arrR[currentRightIndex]);
      currentRightIndex++;
    }
  }
*/

  return arrResult;
}

console.log(mergeArrray(array1, array2));