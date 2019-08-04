'use strict';

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
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


let queue = new Queue();
console.log(queue.peek());
queue.enqueue('foo');
console.log(queue.peek());
queue.enqueue('bar');
console.log(queue.peek());
queue.dequeue();
console.log(queue.peek());