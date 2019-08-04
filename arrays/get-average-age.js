'use strict';

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr) {
  const arrayLength = arr.length;
  let totalAge = arr.reduce((prev, user) => prev + user.age, 0);
  return totalAge / arrayLength;
}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28