'use strict';

class Stack {
  constructor() {
    this.stack = [];
  }

  pop() {
    if (isEmpty()) {
      return 'Stack is empty';
    }
    return this.stack.pop();
  }

  push(element) {
    this.stack.push(element);
  }

  peek() {
    if (isEmpty()) {
      return 'Stack is empty';
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return !this.stack.length;
  }
}