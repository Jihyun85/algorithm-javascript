class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  dequeue() {
    if (!this.head) return "Queue is empty!";

    const targetNode = this.head;
    this.head = this.head.next;

    return targetNode;
  }

  peek() {
    if (!this.head) return "Queue is empty!";

    return this.head.data;
  }

  isEmpty() {
    return this.head ? false : true;
  }
}

const queue = new Queue();

queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(23);

console.log(queue.peek());

console.log(queue);
queue.dequeue();
console.log(queue);

console.log(queue.isEmpty());
