class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(data) {
    let node = new Node(data, this.head);
    node.next = this.head;
    this.head = node;
  }

  pop() {
    if (!this.head) return "Stack is empty!";

    const targetNode = this.head;
    this.head = this.head.next;

    return targetNode;
  }

  peek() {
    if (!this.head) return "Stack is empty!";

    return this.head.data;
  }

  isEmpty() {
    // this.head가 존재하면 false(빈 것이 아님) / this.head가 존재하지 않으면 true(비었음)
    this.head ? false : true;
  }
}

const stack = new Stack();

stack.pop();
