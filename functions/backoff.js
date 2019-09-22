'use strict';

function backoff(ms, maxRepeats) {
  let counter = 1;
  return function() {
    if (counter > maxRepeats) {
      counter = 1;
      return false;
    }
    return counter++ * ms;
  }
}

let back1 = backoff(1000, 3);
let back2 = backoff(2000, 4);
console.log('---------');
console.log(back1());
console.log(back1());
console.log(back1());
console.log(back1());
console.log(back1());

console.log('---------');
console.log(back2());
console.log(back2());
console.log(back2());
console.log(back2());
console.log(back2());
console.log(back2());
