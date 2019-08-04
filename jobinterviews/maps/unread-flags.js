'use strict';

let map = new WeakSet()

function markUnread(message) {
  map.add(message);
}


let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

markUnread(messages[0]);
console.log(map.has(messages[0]));
messages.splice(0, 1);
// messages.shift();
console.log(messages);
console.log(map.has(messages[0]));