'use strict';

const number4 = 4;
const number5 = 5;
const memo = {};

function fib(n) {
  if (n < 0) {
    throw Error('Index cannot be negative');
  } else if (n === 0 || n === 1) {
    return n;
  }

  if (memo.hasOwnProperty(n)) {
    return memo[n];
  }

  let result = fib(n - 1) + fib(n - 2);
  // return fib(n - 1) + fib(n - 2);

  memo[n] = result;

  return result;
}

function fibBottomUp(n) {
  if (n < 0) {
    throw Error('Index cannot be negative');
  } else if (n === 1 || n === 0) {
    return n;
  }

  let prevPrev = 0;
  let prev = 1;
  let current;

  for (let i = 1; i < n; i++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
}

console.log(fib(4));
console.log(fib(7));
console.log(fibBottomUp(7));