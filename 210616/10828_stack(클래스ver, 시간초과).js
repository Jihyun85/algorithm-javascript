const input = [
  "14",
  "push 1",
  "push 2",
  "top",
  "size",
  "empty",
  "pop",
  "pop",
  "pop",
  "size",
  "empty",
  "pop",
  "push 3",
  "empty",
  "top",
];

// const input = ["7", "pop", "top", "push 123", "top", "pop", "top", "pop"];

let result = "";

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  top() {
    if (!this.head) result += `${this.head.data}\n`;
    else result += `${this.head.data}\n`;
  }

  pop() {
    if (!this.head) result += `-1\n`;
    else {
      result += `${this.head.data}\n`;
      this.head = this.head.next;
      this.size--;
    }
  }

  empty() {
    result += this.size === 0 ? `1\n` : `0\n`;
  }

  printSize() {
    result += `${this.size}\n`;
  }
}

const stack = new Stack();

for (let i = 1; i < input.length; i++) {
  let orderAry = input[i].split(" ");
  let word = orderAry[0];

  switch (word) {
    case "push":
      stack.push(orderAry[1]);
      break;
    case "top":
      stack.top();
      break;
    case "pop":
      stack.pop();
      break;
    case "empty":
      stack.empty();
      break;
    case "size":
      stack.printSize();
      break;
    default:
      null;
  }
}

console.log(result.trim());
