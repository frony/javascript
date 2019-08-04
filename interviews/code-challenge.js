'use strict';

let stringToCompare = 'I am a Brazilian in San Francisco';
const arrayToCompare = ['I', 'Francisco', 'to', 'from', 'in', 'San', 'am', 'a', 'Brazilian'];

function compare(str, arr) {
  const array = arr.slice();
  // console.log(array);
  const strToArray = str.split(' ');
  // console.log(strToArray);
  const resultArray = [];

/*  strToArray.forEach(item1 => array.forEach(item2 => {
    console.log(`${item1} : ${item2}`);
    if (item1 === item2) {
      resultArray.push(item1);
    }
  }));*/



  strToArray.forEach(item => {
    console.log(item);
    if (array.includes(item)) {
      resultArray.push(item);
    }
  });
  // console.log(resultArray);
  // console.log(strToArray);
  // console.log(strToArray.join(' '));
  // console.log(strToArray);
  return strToArray.join(' ') === str;
}

// compare(stringToCompare, arrayToCompare);
console.log(compare(stringToCompare, arrayToCompare));

