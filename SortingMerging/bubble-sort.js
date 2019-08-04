'use strict';

function bubbleSort(array) {
  const length = array.length;
  console.log(length);

  for (let i = 0; i < length; i++) {
    console.log(`****** i: ${i} ******`);
    for (let j = 0; j < (length - i - 1); j++) {
      console.log(`====== j: ${j} ======`);
      console.log(`length - i - 1: ${length - i - 1}`);
      console.log(`array[j]: ${array[j]}`);
      console.log(`array[j + 1]: ${array[j + 1]}`);

      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

const unsortedArray = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(bubbleSort(unsortedArray));