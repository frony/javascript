'use strict';

const Cache = require('./cache');
const objUS = {
  countryCode: 'US',
  countryNAme: 'United States',
  currencyCode: 'USD',
};

const objBR = {
  countryCode: 'BR',
  countryNAme: 'Brazil',
  currencyCode: 'BRL',
};

let cacheUS = new Cache('US');
// let cacheCountry = new Cache('country');
cacheUS.set(objUS);
console.log(cacheUS.get());

console.log('==========');

let cacheBR = new Cache('BR');
// let cacheCountry = new Cache('country');
cacheUS.set(objBR);
console.log(cacheBR.get());
