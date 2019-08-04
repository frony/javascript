'use strict';
/*

function Fn() {
  let name = 'foo';
  let getName = function() {
    this.name = name;
    return this.name;
  }
}

const myFn = new Fn();

console.log(myFn.name);
console.log(myFn.getName());
*/


function sayHi() {
  console.log("Hi");

  // let's count how many times we run
  sayHi.counter++;
}
sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi

console.log( `Called ${sayHi.counter} times` ); // Called 2 times