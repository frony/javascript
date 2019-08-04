'use strict';

class Node {
  constructor(next, value) {
    console.log(`----- typeof next: ${typeof next} -----`);
    this.next = next;
    this.value = value;
  }


}

class Stack {
  constructor() {
    this.stack = null;
  }

  push(value) {
    let head = this.stack;
    let newNode = new Node(head, value);
    this.stack = newNode;
/*
    if (!head) {
      this.stack = newNode;
    } else {
      newNode.next = head;
      this.stack = newNode;
    }*/

    console.log('=== push() ===');
    return this.stack;
  }

  pop() {
    let head = this.stack;
    if (!head) {
      return 'The stack is empty';
    }

    this.stack = head.next;
    console.log('=== pop() ===');
    return head.value;
  }

  peek() {
    let head = this.stack;
    if (!head) {
      return 'The stack is empty';
    }
    console.log('=== peek() ===');
    return head;
  }
}


const stack = new Stack();

console.log(stack.push('stack 1'));
console.log(stack.push('stack 2'));
console.log(stack.push('stack 3'));
console.log(stack.push('stack 4'));

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());

