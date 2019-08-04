'use strict';

const Cache = require('./cache');

let cacheUser = new Cache('user');
console.log(cacheUser.get());