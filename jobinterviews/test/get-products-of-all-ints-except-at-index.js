'use strict';

const arr1 =   [1, 7, 3, 4]; //   [84, 12, 28, 21]
const arr2 = [3, 1, 2, 5, 6, 4];
const arr3 = [2, 4, 10];
const arrOf1 = [1];

function getProductsOfAllIntsExceptAtIndex(arr) {
  if (arr.length < 2) {
    throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
  }

  const arrayOfProducts = [];
  let productSoFar = 1;

  for (let i = 0; i < arr.length; i++) {
    console.log(`----- ${i} -----`);
    console.log(`productSoFar: ${productSoFar}`);
    console.log(`arrayOfProducts[${i}]: ${arrayOfProducts[i]}`);
    arrayOfProducts[i] = productSoFar;
    productSoFar *= arr[i];
    console.log(`productSoFar: ${productSoFar}`);
    console.log(`arrayOfProducts[${i}]: ${arrayOfProducts[i]}`);
  }

  console.log(arrayOfProducts);

  productSoFar = 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(`===== ${i} =====`);
    console.log(`productSoFar: ${productSoFar}`);
    console.log(`arrayOfProducts[${i}]: ${arrayOfProducts[i]}`);
    arrayOfProducts[i] *= productSoFar;
    productSoFar *= arr[i];
    console.log(`productSoFar: ${productSoFar}`);
    console.log(`arrayOfProducts[${i}]: ${arrayOfProducts[i]}`);
  }

  return arrayOfProducts;
}

console.log(getProductsOfAllIntsExceptAtIndex(arr3));