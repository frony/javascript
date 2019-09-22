'use strict';

function getChange(change) {
  const result = {
    25: 0,
    10: 0,
    5: 0,
    1: 0,
  };

  while (true) {
    if (change >= 25) {
      result[25] += 1;
      change -= 25;
    } else if (change >= 10) {
      result[10] += 1;
      change -= 10;
    } else if (change >= 5) {
      result[5] += 1;
      change -= 5;
    } else if (change >= 1) {
      result[1] += 1;
      change -= 1;
    } else {
      break;
    }

  }

  return result;
}

console.log(getChange(50));
console.log(getChange(60));
console.log(getChange(65));
console.log(getChange(67));