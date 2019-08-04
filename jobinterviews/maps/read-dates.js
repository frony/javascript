'use strict';

let map = new WeakMap();

function addReadDate(message) {
  const date = new Date();
  map.set(message, date);
}

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

addReadDate(messages[0]);
console.log(map.has(messages[0]));
console.log(map.get(messages[0]));
messages.shift();
console.log(map.has(messages[0]));
console.log(map.get(messages[0]));