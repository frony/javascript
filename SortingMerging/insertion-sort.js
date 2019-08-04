'use strict';

const arrrExample = [5, 9, 13, 4, 1, 6];

function insertionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let el = arr[i];
    let j;
    console.log(`===== ${i} : ${el} =====`);
    console.log(arr);

    for (j = i - 1; j >= 0 && arr[j] > el; j--) {
      console.log(`------ ${j} -----`);
      console.log(arr[j]);
      console.log(arr[j + 1]);

      arr[j + 1] = arr[j];

      console.log(arr[j + 1]);
      console.log(arr);
    }

    arr[j + 1] = el;
    console.log(`****** ${arr} ******`);
  }
  return arr;
}

const sorted = insertionSort(arrrExample);
console.log(sorted);