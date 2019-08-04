'use strict';

const binarySearch = require('./binary-search');
/*const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const searchValue = process.argv[2] ? process.argv[2] : 11;
console.log(searchValue);
console.log(binarySearch(testArray, Number(searchValue)));*/


const testArray2 = ['marcos', 'jose', 'almeida', 'frony'];
const searchValue = 'marcos';
console.log(binarySearch(testArray2, searchValue));