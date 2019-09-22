'use strict';

function testDefault(model = {test: true}, foo) {
  console.log(model);
  console.log(foo);
}

testDefault({testing: false}, 'feh');
testDefault(undefined, 'boo');

const arr = [];

function pushToArray(i) {
  arr.push(i);
}

function looping() {
  for (let i = 0; i < 10; i++) {
    pushToArray(i);
  }
}