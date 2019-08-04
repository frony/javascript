'use strict';

function unique(arr) {
  const nonRepeat = [];
  for (let str of arr) {
    if (!nonRepeat.includes(str)) {
      nonRepeat.push(str);
    }
  }
  return nonRepeat;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O