'use strict';

// Implement a function that will determine if a given string is a palindrome
// Examples: mom, racecar, deified , ABBA
function palindrome(string) {
  let inputString = string + '';
  if (!inputString) {
    return false;
  }

  if (inputString.length === 1) {
    return true;
  }


  if (inputString && inputString.length > 1) {
    // create array
    let arr = inputString.split('');
    let startIndex = 0;
    let endIndex = arr.length - 1;

    // loop through the array
    for (let i = 0; i < arr.length; i++) {
      if (arr[startIndex] !== arr[endIndex]) {
        // arr.splice(arr[startIndex] + 1, arr[endIndex] -1);
        return false;
      }

      startIndex++;
      endIndex--;

    }
  }


  return true;


  //check if that letter is in the map
}

function isPalindrome(inputString) {
  // console.log(string.length);
  if (!inputString || !inputString.length || inputString.length <=1) {
    return true;
  } else {
    let startIndex = 0;
    let endIndex = 0;
    let arr = inputString.split('');

    for (let i = 0; i < arr.length; i++) {
      let leftItem = arr[startIndex];
      let rightItem = arr[endIndex];
      console.log(`------ ${i} ------`);
      console.log(`leftItem: ${leftItem}`);
      console.log(`rightItem: ${rightItem}`);

      if ((leftItem && rightItem) && (leftItem !== rightItem)) {
        return false;
      }

      startIndex++;
      endIndex--;
    }
  }

  return true;
}

// isPalindrome(' ');
// isPalindrome('');
console.log(isPalindrome('a')); // true
console.log(isPalindrome('ana')); // true
console.log(isPalindrome(' ')); // true
console.log(isPalindrome('')); // true
console.log(isPalindrome(null)); // true
console.log(palindrome(123)); // false
console.log(palindrome(123321)); // true