'use strict';

function sumTo(max) {
  if (max === 1) {
    return max;
  }

  return max + (sumTo(max - 1));
}

console.log(sumTo(100));

/*

function sumTo(max) {
  let num = 0;
  for (let i = 0; i <= max; i++) {
    num += i;
  }
  return num;
}
*/

