'use strict';

/*const Queue = require('../queue-linked-list');
let queue = new Queue();
console.log(queue.peek());
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
console.log(queue.peek());*/

const Stack = require('../stack-linked-list');
let stack = new Stack();
stack.push('A');
stack.push('B');
stack.push('C');
console.log(stack.peek());
let stackTop = stack.getHead();
// console.log(`stack: ${stack}`);
console.log(stack);
console.log(stackTop);

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');

a.next = b;
b.next = c;

// console.log(a);

function reverseList(headOfList) {
  // console.log(headOfList);
  let currentNode = headOfList;
  let previousNode = null;
  let nextNode = null;

  while (currentNode) {
    console.log(`===== currentNode.value: ${currentNode.value} =======`);
    console.log(`currentNode.next: ${currentNode.next ? currentNode.next.value : null}`);
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }

  return previousNode;
}

reverseList(a);
console.log(a);

/*console.log('----- reverse 1 -----');
let reversedList = reverseList(stackTop);
console.log(stack.peek());
console.log(stack.getHead());
// console.log(stackTop);

console.log('----- reverse 2 -----');
reversedList = reverseList(reversedList);
console.log(stack.peek());
console.log(stack.getHead());
// console.log(reversedList);*/

console.log('----- reverse 3 -----');
stackTop = reverseList(stackTop);
console.log(stack.peek());
console.log(stack.getHead());

console.log('----- reverse 4 -----');
stackTop = reverseList(stackTop);
console.log(stack.peek());
console.log(stack.getHead());


function deleteNode(node) {

}