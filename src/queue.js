const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {

  head = null;
  tail = this.head;

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (!this.head) {
      this.head = new ListNode(value);
      this.tail = this.head;
      return;
    }
    
    const currentTail = this.tail;
    this.tail = new ListNode(value);;
    currentTail.next = this.tail;
  }

  dequeue() {
    if (!this.head) {
      return;
    }
    const currentHeadValue = this.head.value;
    this.head.value = this.head.next.value;
    this.head.next = this.head.next.next;
    return currentHeadValue;
  }
}

module.exports = {
  Queue
};
