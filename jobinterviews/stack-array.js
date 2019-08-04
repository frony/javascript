'use strict';

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.isEmpty() ? 'Stack is empty' : this.stack.pop();
  }

  peek() {
    return this.isEmpty() ? 'Stack is empty' : this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return !this.stack.length;
  }
}