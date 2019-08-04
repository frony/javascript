'use strict';

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
  const tip = (meal_cost / 100) * tip_percent;
  const tax = (meal_cost / 100) * tax_percent;
  return Math.round(meal_cost + tip + tax);
}

console.log(solve(12.00, 20, 8));
console.log(solve(10.25, 17, 5));