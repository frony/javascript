'use strict';

const stockPrices = [10, 7, 5, 8, 11, 9];

function calculateBestTime(initialTimeInMinutes, timeLapse) {
  let time = initialTimeInMinutes + timeLapse;
  let remainderTime = time % 60;
  let hour = (time - remainderTime) / 60;
  return `${hour}:${remainderTime}`;
}

function getMaxProfit(stockPrices) {
  let biggestDiff = null;
  let bestSpread = {};
  const initialTimeInMinutes = (9 * 60) + 30;
  // loop through stockPrices
  for (let i = 0, maxLen = stockPrices.length; i < maxLen; i++) {
    // console.log(`========== ${i}: ${stockPrices[i]} ===========`);
    for (let j = i + 1; j < maxLen; j++) {
      // console.log(` ${j}: ${stockPrices[j]}`);
      let diff = stockPrices[j] - stockPrices[i];
      if (diff > 0) {
        // console.log(`----- diff: ${diff} -------`);
        if (!biggestDiff || biggestDiff < diff) {
          biggestDiff = diff;
          let timeLapseBuy = i * 30;
          let timeLapseSell = j * 30;
          let bestBuyTime = calculateBestTime(initialTimeInMinutes, timeLapseBuy);
          let bestSellTime = calculateBestTime(initialTimeInMinutes, timeLapseSell);
          bestSpread = {
            minIndex: i,
            minValue: stockPrices[i],
            bestBuyTime,
            maxIndex: j,
            maxValue: stockPrices[j],
            bestSellTime,
            biggestDiff,
          };
        }
      }
    }
  }
  console.log(bestSpread);
  return bestSpread;
}

getMaxProfit(stockPrices);