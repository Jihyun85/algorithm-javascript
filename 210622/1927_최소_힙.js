// No.1927 최소 힙

class MinHeap {
  constructor() {
    this.storage = [null]; // 인덱스0을 채워줌
  }

  insert(value) {
    //push 해서 부모index와 비교해서 더 작으면 올려야 함
    this.storage.push(value);
    let index = this.storage.length - 1;

    while (index > 1) {
      let parentIndex = Math.floor(index / 2);
      if (this.storage[index] < this.storage[parentIndex]) {
        let temp = this.storage[index];
        this.storage[index] = this.storage[parentIndex];
        this.storage[parentIndex] = temp;
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  delete() {
    // 루트 노드를 맨 뒤로 빼서 pop 후 삼각비교
    let lastIndex = this.storage.length - 1;
    let temp = this.storage[1];
    this.storage[1] = this.storage[lastIndex];
    this.storage[lastIndex] = temp;
    let minNum = this.storage.pop();
    let targetIndex = 1;
    while (true) {
      let leftChildIndex = targetIndex * 2;
      let rightChildIndex = targetIndex * 2 + 1;
      let minIndex = targetIndex;

      if (
        this.storage[leftChildIndex] &&
        this.storage[leftChildIndex] < this.storage[minIndex]
      )
        minIndex = leftChildIndex;

      if (
        this.storage[rightChildIndex] &&
        this.storage[rightChildIndex] < this.storage[minIndex]
      )
        minIndex = rightChildIndex;

      if (targetIndex === minIndex) break;

      let temp = this.storage[targetIndex];
      this.storage[targetIndex] = this.storage[minIndex];
      this.storage[minIndex] = temp;
      targetIndex = minIndex;
    }
    return minNum;
  }
}

const minHeap = new MinHeap();
let result = "";

let [N, ...ary] = [
  100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

for (let num of ary) {
  if (num === 0) {
    result += minHeap.storage.length === 1 ? `0\n` : `${minHeap.delete()}\n`;
  } else {
    minHeap.insert(num);
  }
}

console.log(result.trim());
