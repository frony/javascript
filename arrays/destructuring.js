'use strict';

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(sal) {
  let name;
  let topSalary = 0;

  for (let [key, value] of Object.entries(sal)) {
    if (value > topSalary) {
      topSalary = value;
      name = key;
    }
  }
  return name;
}


//topSalary(salaries);
console.log(topSalary(salaries));

// console.log(Object.entries(salaries));