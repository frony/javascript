'use strict';

function fibonacci(n) {
  if ( n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fib(n) {
  let a = 1;
  let b = 1;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

/*function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}*/

console.log(fib(77));
// console.log(fibonacci(77));