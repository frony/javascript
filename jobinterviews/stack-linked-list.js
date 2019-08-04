'use strict';

class Node {
  constructor(next, value) {
    this.next = next;
    this.value = value;
  }
}

class Stack {
  constructor() {
    this.stack = null;
  }

  push(element) {
    let head = this.stack;
    let newNode = new Node(null, element);

    if (!head) {
      this.stack = newNode;
    } else {
      newNode.next = head;
      this.stack = newNode;
    }
  }

  pop() {
    let head = this.stack;

    if (!head) {
      return 'Stack is empty';
    }

    this.stack = head.next;
  }

  getHead() {
    let head = this.stack;

    if (!head) {
      return 'Stack is empty';
    }

    return head;
  }

  peek() {
    let head = this.stack;

    if (!head) {
      return 'Stack is empty';
    }

    return head.value;
  }
}

module.exports= Stack;

/*
let stack = new Stack();
console.log(stack.peek());
stack.push('foo');
console.log(stack.peek());
stack.push('bar');
console.log(stack.peek());
stack.pop();
console.log(stack.peek());*/
