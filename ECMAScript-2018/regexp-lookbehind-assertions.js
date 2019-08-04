'use strict';

// Before
const before = '#winning'.match(/#.*/)[0];
console.log(before);

// After ECMAScript 2018
const after = '#winning'.match(/(?<=#).*/)[0];
console.log(after);

// Let’s say we want to extract numbers from lines
//that have € signs and not $ signs before those numbers.
const hasDollarSign = 'A gallon of milk is $3.00'.match(/(?<!\$)\d+\.\d+/);
console.log(hasDollarSign);

const notDollarSign = 'A gallon of milk is €3.00'.match(/(?<!$)\d+\.\d+/);
console.log(notDollarSign);
console.log(notDollarSign[0]);