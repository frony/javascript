'use strict';

function timeGreet() {
  const hr = new Date().getHours();
  return hr < 12
    ? 'Good morning'
    : hr < 18 ? 'Good afternoon' : 'Good evening';
}

function greet(hardCodedPartsArray, ...replacementPartsArray) {
  console.log(hardCodedPartsArray);
  console.log(replacementPartsArray);
  let str = '';
  hardCodedPartsArray.forEach((string, i) => {
    if ( i < replacementPartsArray.length ) {
      str += `${string}${replacementPartsArray[i]}`;
    } else {
      str += `${string} ${timeGreet()}`;
    }
  });
  return str;
}

const name = 'Marcos';
const greeting = greet`Hello, ${name}!`;
console.log(greeting);