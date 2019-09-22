'use strict';

function work(a, b) {
  console.log( a + b ); // work is an arbitrary function or method
}

function spy(func) {
  // let counter = 0;
  function wrapper(...args) {
    wrapper.calls.push(args);
    // counter += 1;
    wrapper.counter += 1;
    return func.apply(this, arguments);
  }

  wrapper.calls = [];
  wrapper.counter = 0;

  return wrapper;
}
/*

work = spy(work);
console.log(`counter: ${work.counter}`);

work(1, 2); // 3
console.log(`counter: ${work.counter}`);
work(4, 5); // 9
console.log(`counter: ${work.counter}`);

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
*/


function myCounter() {
  let counter = 0;
  return function() {
    return counter++;
  }
}

const counter1 = myCounter();
const counter2 = myCounter();

/*
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());
*/


function User(name) {
  if (!new.target) { // if you run me without new
    return new User(name); // ...I will add new for you
  }

  this.name = name;
}

let john = User("John"); // redirects call to new User
console.log(john.name); // John