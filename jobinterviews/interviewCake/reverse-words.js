'use strict';

const message = [ 'c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l' ];

function reverseWords(message) {
  let str = message.join('');
  let arrTemp = str.split(' ');
  let start = 0;
  let end = arrTemp.length - 1;
  while (start < end) {
    let temp = arrTemp[end];
    arrTemp[end] = arrTemp[start];
    arrTemp[start] = temp;

    start++;
    end--;
  }

  message.length = 0;

  for (let value of arrTemp) {
    message.push(...value + ' ');
  }
  message.pop();
}

reverseWords(message);

console.log(message.join(''));
// Prints: 'steal pound cake'