'use strict';

/* a celebrity (Rihanna) is a person who:
1. doesn't know anyone else in the party
2. everyone else knows that celebrity
*/

function whoIsCelebrity(arrayOfPeople) {
  // loop through the array
  for (person of arrayOfPeople) {
    for (let i = 0; i < arrayOfPeople.length; i++) {
      let doesKnow = AKnowsB(person, arrayOfPeople[i]);

      if (!doesKnow) {
        arrayOfPeople.splice(i, 1);
      }
    }
  }

  return arrayOfPeople.length === 1;
}

function AKnowsB(A, B) {
  if (A === "Rihanna") return false;
  if (B === "Rihanna") return true;

  return false;
}



let celebrity = "Rihanna";

let array = ["Alice", "Bob", "Rihanna", "Alex"]; // 100 guest names in total

