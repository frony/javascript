'use strict';

const arrayOfInts = [1, 10, -5, 1, -100];

function highestProductOf3(arr) {
  if (arr.length < 3 || !arr.length) {
    return false;
  }

  let highestProductOf2 = arr[0] * arr[1];
  let lowestProductOf2 = arr[0] * arr[1];

  let highestProductOf3 = arr[0] * arr[1] * arr[2];

  let highest = Math.max(arr[0], arr[1]);
  let lowest = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    let currentValue = arr[i];

    highestProductOf3 = Math.max(
      highestProductOf3,
      currentValue * highestProductOf2,
      currentValue * lowestProductOf2,
    );

    highestProductOf2 = Math.max(
      highestProductOf2,
      currentValue * highest,
      currentValue * lowest,
    );

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      currentValue * highest,
      currentValue * lowest,
    );

    highest = Math.max(highest, currentValue);
    lowest = Math.max(lowest, currentValue);
  }

  return highestProductOf3;
}

console.log(highestProductOf3(arrayOfInts));