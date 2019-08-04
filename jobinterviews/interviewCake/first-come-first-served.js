'use strict';

function isFirstComeFirstServed(takeOut, dineIn, servedOrders) {

  if (servedOrders.length > takeOut.length + dineIn.length) {
    return false;
  }

  for (let i = 0; i < servedOrders.length; i++) {
    let value = servedOrders[i];
    if (value === takeOut[0]) {
      takeOut.shift();
    } else if (value === dineIn[0]) {
      dineIn.shift();
    }
  }

  return takeOut.length === 0 && dineIn.length === 0;
}

let actual = isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
console.log(actual);
// console.log([1, 4, 5].shift());