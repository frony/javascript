'use strict';

function hasPalindromePermutation(theString) {
  // make an array
  let theArray = theString.split('');
  // return theArray;

  let letterSet = new Set();

  // loop through the array
  for (let i = 0; i < theArray.length; i++) {
    // make sure there is no more than one unique letter
    let currentLetter = theArray[i];
    console.log(`------ ${currentLetter} -------`);
    console.log(letterSet);
    if (letterSet.has(currentLetter)) {
      letterSet.delete(currentLetter);
    } else {
      letterSet.add(currentLetter);
    }
    console.log(letterSet);
  }

  return letterSet.size <= 1;
}

let test = hasPalindromePermutation('aabcbcd')
console.log(test);