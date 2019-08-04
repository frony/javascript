'use strict';

function f(x) {
  console.log(x);
}

function delay(f, ms) {
  return function () {
    return setTimeout(() => f.apply(this, arguments), ms);
    // return setTimeout(() => f(...value), ms);
  }
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms