'use strict';

class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {

    // Count the frequency of each word
    console.log(inputString);

    // break the string into an array of substrings
    let wordArray = inputString.split(' ');

    // loop through the array
    for (let i = 0; i < wordArray.length; i++) {
      // make sure all words are lower case
      let currentWord = wordArray[i].toLowerCase();

      // if wordsToCounts doesn't have current word
      // add it and set its value = 1
      if (!this.wordsToCounts.has(currentWord)) {
        this.wordsToCounts.set(currentWord, 1);
        // otherwise, increase its value +1
      } else {
        let currentValue = this.wordsToCounts.get(currentWord) + 1;
        this.wordsToCounts.set(currentWord, currentValue);
      }

    }
  }

}


// let desc = 'simple sentence';
let actual = new WordCloudData('I like cake').wordsToCounts;
let expected = new Map([['I', 1], ['like', 1], ['cake', 1]]);
// assert(isMapsEqual(actual, expected), desc);
console.log(actual);
console.log(expected);
console.log(actual === expected);