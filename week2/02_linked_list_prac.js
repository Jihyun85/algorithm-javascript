// Q.  다음과 같은 두 링크드 리스트를 입력받았을 때, 합산한 값을 반환하시오.

// 예를 들어 아래와 같은 링크드 리스트를 입력받았다면,
// 각각 678, 354 이므로 두개의 총합
// 678 + 354 = 1032 를 반환해야 한다.

// 단, 각 노드의 데이터는 한자리 수 숫자만 들어갈 수 있다.

// [6] -> [7] -> [8]
// [3] -> [5] -> [4]

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

  insertLast(data) {
    let node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.size++;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
    this.size++;
  }
}

const linkedList1 = new LinkedList();

linkedList1.insertLast(6);
linkedList1.insertLast(7);
linkedList1.insertLast(8);

const linkedList2 = new LinkedList();
linkedList2.insertLast(3);
linkedList2.insertLast(5);
linkedList2.insertLast(4);

function getDataToString(list) {
  let num = "";
  current = list.head;

  while (current) {
    num += current.data;
    current = current.next;
  }

  return num;
}

function getLinkedListSum(list1, list2) {
  let sum1 = getDataToString(list1);
  let sum2 = getDataToString(list2);

  sumResult = Number(sum1) + Number(sum2);
  return sumResult;
}

result = getLinkedListSum(linkedList1, linkedList2);
console.log(result);
