'use strict';

const binarySearch = require('./may-be-added');
/*
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const searchValue = process.argv[2] ? process.argv[2] : 11;
console.log(searchValue);
*/

let testArray = [1, 2, 4, 9];
// const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const searchVal = 8;

console.log(binarySearch(testArray, searchVal));