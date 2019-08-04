'use script';

const promises = [
  new Promise(resolve => resolve(1)),
  new Promise(resolve => resolve(2)),
  new Promise(resolve => resolve(3)),
];

// BEFORE
async function test1() {
  for (const obj of promises) {
    console.log(obj);
  }
}

test1();

// AFTER ECMAScript 2018
async function test2() {
  for await (const obj of promises) {
    console.log(obj);
  }
}

test2();