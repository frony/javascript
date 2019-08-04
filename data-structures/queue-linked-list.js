'use strict';

class Node{
  constructor(next, value) {
    this.next = next;
    this.value = value;
  }
}

class Queue{
  constructor() {
    this.queue = null;
  }

  enqueue(value) {
    console.log('=== enqueue() ===');
    let head = this.queue;
    let newNode = new Node(null, value);

    if (!head) {
      this.queue = newNode;
    } else {
      let traverseNode = head;
      while (traverseNode.next) {
        traverseNode = traverseNode.next;
      }
      traverseNode.next = newNode;
      console.log(traverseNode);
    }
    return newNode;
  }

  dequeue() {
    let head = this.queue;
    if (!head) {
      return 'Queue is empty';
    }
    this.queue = head.next;
    console.log('=== dequeue() ===');
    return head;
  }

  peek() {
    let head = this.queue;
    if (!head) {
      return 'Queue is empty';
    }
    console.log('=== peek() ===');
    return this.queue;
  }
}

const queue = new Queue();
console.log(queue.enqueue('Queue 1'));
console.log(queue.enqueue('Queue 2'));
console.log(queue.enqueue('Queue 3'));

console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
