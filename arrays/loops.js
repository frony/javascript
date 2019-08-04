'use strict';

let fruits = ["Apple", "Orange", "Plum"];
/*

fruits = {
  foo: 'bar',
  feh: 'baz',
};
*/

// iterates over array elements
// for (let fruit in fruits) { // keys for objects and array
// for (let fruit of Object.keys(fruits)) { // keys for objects
// for (let fruit of Object.values(fruits)) { // values for objects
for (let fruit of fruits) { // values only for array
  // console.log( fruit );
}

// console.log(fruits.toString());
// console.log(String(fruits));


function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    console.log(`======= ${item} =======`)
    console.log(`partialSum: ${partialSum}`)
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    console.log(`partialSum: ${partialSum}`)
    console.log(`maxSum: ${maxSum}`)
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

// console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
// console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
// console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
// console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
// console.log( getMaxSubSum([1, 2, 3]) ); // 6
// console.log( getMaxSubSum([-1, -2, -3]) ); // 0
/*

function camelize(str) {
  console.log(str);
  const arr = str.split('');
  console.log(arr);
  const i = str.indexOf('-');
  console.log(i);
  const nextLetter = str[i + 1];
  console.log(nextLetter);
  arr.splice(i, 2, nextLetter.toUpperCase());

  const camelized = arr.map((item) => {

  });

/!*  while (str.indexOf('-') > -1) {
    const i = str.indexOf('-');
    const nextLetter = str[i + 1];
    arr.splice(i, 2, nextLetter);
  }*!/
  // console.log(arr.join(','));
  console.log(arr);
  const result = arr.join('');
  console.log(result);
  return arr.join('');
/!*  return arr.map((item) => {
    if (item.indexOf('-') > -1) {
      // const i = item.indexOf('-');
      return item.replace
    }
  });*!/
}
*/

function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

// console.log(camelize("background-color") == 'backgroundColor');
// console.log(camelize("list-style-image") == 'listStyleImage');
// camelize("-webkit-transition") == 'WebkitTransition';

function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}


// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (matching values)

// console.log( arr ); // 5,3,8,1 (not modified)


function filterRangeInPlace(arr, a, b) {
  arr = arr.filter(item => item >= a && item <= b);
  return arr;
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// console.log( arr ); // [3, 1]



arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);
// ... your code to sort it in the reverse order

console.log( arr ); // 8, 5, 2, 1, -10



// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

function copySorted(arr) {
  // const copiedArray = arr.slice();
  // return copiedArray.sort((a, b) => a.localeCompare(b));
  return arr.slice().sort((a, b) => a.localeCompare(b));
}


arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (no changes)



// Create an extendable calculator

function Calculator() {
  this.calculate = function(str) {
    const [a, operator, b] = str.split(' ');
    // return operator === '+' ? add(a, b) : subtratct(a, b);
    return operator === '+' ? +a + +b : a - b;
  }

  // return this.calculate;
}

let calc = new Calculator;

// console.log( calc.calculate("3 + 7") ); // 10



// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.



/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(user => user.name);

console.log( names ); // John, Pete, Mary
*/


// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

  /*
  usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
  ]
  */

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});