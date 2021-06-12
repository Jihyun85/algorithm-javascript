// linkedList

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.size++;
      return;
    }

    let node = new Node(data);
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
    this.size++;
  }

  getKthNodeFromLast(k) {
    let index = this.size - k;
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current.data;
  }
}

const linkedList = new LinkedList();

linkedList.insertLast(6);
linkedList.insertLast(7);
linkedList.insertLast(8);
linkedList.insertLast(12);

console.log(linkedList.getKthNodeFromLast(2));

//  뒤에서 2번째 값, list의 size = 10이면
//  지금 list 인덱스는 9까지 있으니까 인덱스 8을 가져와야 함 => list.size - k
function getValueInList(k, list) {
  let index = list.size - k;
  let current = list.head;

  for (let i = 0; i < index; i++) {
    current = current.next;
  }

  return current.data;
}

const result = getValueInList(2, linkedList);
console.log(result);
