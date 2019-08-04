'use strict';

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
    const len = this.queue.length;
    return this.queue[len - 1];
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    return this.queue.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    return this.queue[0];
  }

  isEmpty() {
    return !this.queue.length;
  }
}

const queue = new Queue();

console.log(queue.enqueue('Queue 1'));
console.log(queue.enqueue('Queue 2'));
console.log(queue.enqueue('Queue 3'));
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());