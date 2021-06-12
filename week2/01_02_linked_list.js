// https://velog.io/@kimkevin90/Javascript를-이용한-Linked-List-구현

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // 맨 앞에 삽입
  insertFirst(data) {
    this.head = new Node(data, this.head); // 이전의 this.head가 새로운 head의 next가 됨
    this.size++;
  }

  // 맨 뒤에 삽입
  insertLast(data) {
    let node = new Node(data, null);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // 중간에 삽입
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      this.size++;
      return;
    }

    let node = new Node(data);

    let previous;
    let count = 0;
    let current = this.head;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = node;
    node.next = current;

    this.size++;
  }

  // 해당 index의 데이터 출력하기
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      current = current.next;
      count++;
    }
    return null;
  }

  // 삭제하기
  removeAt(index) {
    let count = 0;
    let current = this.head;
    let previous;

    if (index === 0) {
      this.head = current.next;
      this.size--;
      return;
    }

    while (count < index) {
      count++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.size--;
  }

  // 리스트 비우기
  clearList() {
    this.head = null;
    this.size = 0;
  }

  printListdata() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertLast(300);
linkedList.insertAt(1000, 1);

linkedList.removeAt(3);

linkedList.printListdata();

linkedList.getAt(1);

linkedList.printListdata();
