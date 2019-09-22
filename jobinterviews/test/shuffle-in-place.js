'use strict';

const array = [10, 7, 5, 8, 11, 9];

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1) + floor);
}

function shuffle() {
  if (array.length <= 1) {
    return array;
  }

  for (let indexToIterate = 0; indexToIterate < array.length - 1; indexToIterate++) {
    let indexToShuffle = getRandom(indexToIterate, array.length - 1);

    if (indexToIterate !== indexToShuffle) {
      let temp = array[indexToIterate];
      array[indexToIterate] = array[indexToShuffle];
      array[indexToShuffle] = temp;
    }
  }
}

console.log(array);
shuffle(array);
console.log(array);