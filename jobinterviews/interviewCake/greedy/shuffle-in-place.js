'use strict';

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {
  if (array.length <= 1) {
    return;
  }
  // Shuffle the input in place
  for (let indexWeAreChoosingFor = 0; indexWeAreChoosingFor < array.length - 1; indexWeAreChoosingFor++) {

    let randomIndex = getRandom(indexWeAreChoosingFor, array.length - 1);

    if (randomIndex !== indexWeAreChoosingFor) {
      let currentValue = array[indexWeAreChoosingFor];
      array[indexWeAreChoosingFor] = array[randomIndex];
      array[randomIndex] = currentValue;
    }
  }

}


const sample = [1, 2, 3, 4, 5];
console.log('Initial array: ', sample);
shuffle(sample);
console.log('Shuffled array: ', sample);