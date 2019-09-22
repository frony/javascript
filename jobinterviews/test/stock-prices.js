'use strict';

const stockPrices = [10, 20, 40, 7, 5, 8, 11, 9];

function getBestProfit(arr) {
  let minPrice = arr[0];
  let maxProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    let currentPrice = arr[i];
    let currentProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, currentProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}

console.log(getBestProfit(stockPrices));
console.log(getBestProfit([10, 7, 5, 8, 11, 9]));
console.log(getBestProfit([10, 9, 7, 3, 2, 1]));