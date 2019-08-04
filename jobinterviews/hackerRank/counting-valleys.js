'use strict';

const valley1 = 'UDDDUDUU';
const valley2 = 'DUDU';
const valley0 = 'UDUD';

function countingValleys(strSteps) {
  const steps = strSteps.split('');
  let numValleys = 0;
  let currentLevel = 0;
  let previousLevel = 0;

  for (let i = 0, maxLen = steps.length; i < maxLen; i++) {
    if (steps[i] === 'U') {
      currentLevel++;
    } else {
      currentLevel--;
    }

    if (previousLevel === 0 && ((currentLevel - previousLevel) < 0)) {
      numValleys++;
    }

    previousLevel = currentLevel;
  }

  return numValleys;
}

console.log(countingValleys(valley1));
console.log(countingValleys(valley2));
console.log(countingValleys(valley0));