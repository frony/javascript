'use strict';

function reverseString(input) {
  let str = input.split('');
  console.log(typeof input);
  console.log(str);
  // console.log(str.isArray());
  const maxLoop = Math.floor(str.length / 2);
  let lastIndex = str.length - 1;
  for (let i = 0; i < maxLoop; i++) {
    // console.log(str[i]);
    // console.log(str[lastIndex]);
    let temp = str[i];
    // console.log(`temp: ${temp}`);
    str[i] = str[lastIndex];
    str[lastIndex] = temp;
    lastIndex--;
  }
  // console.log(`str: ${str}`);
  console.log(str);
  // console.log(Object.entries(str));
  return str.join('');
}

const str1 = 'Marcos';
const str2 = 'Kaori';
console.log(reverseString(str1));
console.log(reverseString(str2));