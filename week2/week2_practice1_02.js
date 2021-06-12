// size가 없는 linked list같은 경우에 사용

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    let node = new Node(data);
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }
}

const linkedList = new LinkedList();
linkedList.insertLast(6);
linkedList.insertLast(7);
linkedList.insertLast(8);

function getKthNodeFromLast(list, k) {
  let slow = list.head;
  let fast = list.head;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.data;
}

console.log(getKthNodeFromLast(linkedList, 2));
