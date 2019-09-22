'use strict';

// const stockPrices = [10, 9, 7, 3, 2, 1];
// const stockPrices = [10, 7, 5, 8, 11, 9];
const stockPrices = [10, 20, 40, 7, 5, 8, 11, 9];

function getMaxProfit(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }

  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  const maxLength = stockPrices.length;

  for (let i = 1; i < maxLength; i++) {
    let currentPrice = stockPrices[i];
    let currentProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, currentProfit);
    minPrice = Math.min(currentPrice, minPrice);
  }

  return maxProfit;
}

console.log(getMaxProfit(stockPrices));