'use strict';

class Node {
  constructor(next, value) {
    this.next = next;
    this.value = value;
  }
}

class Queue {
  constructor() {
    this.queue = null;
  }

  enqueue(element) {
    let head = this.queue;
    let newNode = new Node(null, element);

    if (!head) {
      this.queue = newNode;
    } else {
      let traverseNode = head;
      while (traverseNode.next) {
        traverseNode = traverseNode.next;
      }
      traverseNode.next = newNode;
    }
  }

  dequeue() {
    let head = this.queue;

    if (!head) {
      return 'The queue is empty';
    }

    this.queue = head.next;
  }

  peek() {
    let head = this.queue;

    if (!head) {
      return 'The queue is empty';
    }

    return head.value;
  }
}

module.exports = Queue;


/*
let queue = new Queue();
console.log(queue.peek());
queue.enqueue('foo');
console.log(queue.peek());
queue.enqueue('bar');
console.log(queue.peek());
queue.dequeue();
console.log(queue.peek());*/
