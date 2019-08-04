'use strict';

function sumNumber(array, searchValue) {
  for (let i = 0, maxLen = array.length; i < maxLen; i++) {
    console.log(`*******sumNumber i: ${i}********`);
    // if (binarySearch(array, searchValue - array[i])) {
    if (binarySearch(removeIndex(array, i), searchValue - array[i])) {
      return true;
    }
  }
  return false;
}

function removeIndex(arr, index) {
  console.log('*******removeIndex********');
  console.log(arr);
  console.log(`index: ${index}`);
  console.log(arr.slice(index).concat(arr.slice(index + 1, arr.length)));
  return arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
}


/*const removeIndex = (arr, i) => {
  return arr.slice(0, i).concat(arr.slice(i + 1, arr.length));
};*/

function binarySearch(arr, searchValue) {
  let start = 0;
  let end = arr.length - 1;
  let pivot = Math.floor((start + end) / 2);
  console.log('***************');
  console.log('***************');
  console.log(`start: ${start}`);
  console.log(`end: ${end}`);
  console.log(`pivot: ${pivot}`);

  // as long as pivot is not the search value
  // and array is greater than 1
  // set a new start, end and pivot
  while (start < end) {
  // while(arr[pivot] !== searchValue && arr.length > 1) {
    console.log('==============');
    console.log(`pivot: ${pivot}`);
    console.log(`searchValue: ${searchValue}`);
    console.log(`arr[pivot]: ${arr[pivot]}`);
    if (searchValue < arr[pivot]) {
      end = pivot - 1;
    } else {
      start = pivot + 1;
    }

/*    let newPivot = Math.floor((start + end) / 2);
    if (newPivot !== pivot) {
      pivot = newPivot;
    }*/
    pivot = Math.floor((start + end) / 2);
    console.log('-------------');
    console.log(`pivot: ${pivot}`);
    console.log(`searchValue: ${searchValue}`);
    console.log(`arr[pivot]: ${arr[pivot]}`);
    console.log(`start: ${start}`);
    console.log(`end: ${end}`);

    if (arr[pivot] === searchValue) {
      return true;
    }
  }
  return false;
/*
  const result = arr[pivot] === searchValue ? pivot : false;
  console.log(`result: ${result}`);

  return arr[pivot] === searchValue ? pivot : false;*/
}



// let testArray = [1, 2, 4, 9];
// const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const searchVal = 8;

// console.log((sumNumber(testArray, searchVal)));
// console.log((binarySearch(testArray, searchVal)));

module.exports = sumNumber;