'use strict';

let arr = [1, 2, 3];
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  console.log(array);
}

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]