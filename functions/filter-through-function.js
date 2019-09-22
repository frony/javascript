'use strict';

let arr = [1, 2, 3, 4, 5, 6, 7];
/*
function inBetween(a, b) {
  const rangeArray = [];
  for (let elem of arr) {
    if (elem >= a && elem <= b) {
      rangeArray.push(elem);
    }
  }
  return rangeArray;
}*/


function inBetween(a, b) {
  return function (x) {
    return x >= a && x <=b;
  }
}

function inArray(array) {
  return function(x) {
    return array.includes(x);
  };
}

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2