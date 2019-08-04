'use strict';

let worker = {
  slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
  }
};

function add(a, b) {
  return a + b;
}

function cachingDecorator(func, hash) {
  let cache = new Map();

  return function() {
    let key = hash(arguments);

    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.apply(this, arguments);

    cache.set(key, result);

    return result;
  }
}

function hash() {
  return [].join.apply(arguments);
}

worker.slow = cachingDecorator(worker.slow, hash);
console.log(worker.slow(2,4));
console.log(worker.slow(2,4));

const cachedAdd = cachingDecorator(add, hash);
console.log(cachedAdd(1, 2));
console.log(cachedAdd(1, 2));

let test = {
  foo: 'feh',
  func() {
    console.log(this.foo);
  }
};

test.func();