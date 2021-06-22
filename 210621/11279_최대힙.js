// No.11279 최대 힙
// 널리 잘 알려진 자료구조 중 최대 힙이 있다. 최대 힙을 이용하여 다음과 같은 연산을 지원하는 프로그램을 작성하시오.

// 배열에 자연수 x를 넣는다.
// 배열에서 가장 큰 값을 출력하고, 그 값을 배열에서 제거한다.
// 프로그램은 처음에 비어있는 배열에서 시작하게 된다.

class MaxHeap {
  constructor() {
    this.storage = [null]; // index = 0 자리를 null로 채워서 쓰지 않게 만들어줌 (편하게);
  }

  insert(value) {
    this.storage.push(value);
    let index = this.storage.length - 1;
    while (index > 1) {
      let parentIndex = Math.floor(index / 2);
      if (this.storage[parentIndex] < this.storage[index]) {
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
    let lastIndex = this.storage.length - 1;
    let temp = this.storage[lastIndex];
    this.storage[lastIndex] = this.storage[1];
    this.storage[1] = temp;
    let targetIndex = 1;
    let maxNum = this.storage.pop();

    while (true) {
      let leftChildIndex = targetIndex * 2;
      let rightChildIndex = targetIndex * 2 + 1;
      let maxIndex = targetIndex;

      if (
        leftChildIndex <= this.storage.length - 1 &&
        this.storage[leftChildIndex] > this.storage[maxIndex]
      )
        maxIndex = leftChildIndex;

      if (
        rightChildIndex <= this.storage.length - 1 &&
        this.storage[rightChildIndex] > this.storage[maxIndex]
      )
        maxIndex = rightChildIndex;

      if (maxIndex === targetIndex) break;

      let targetValue = this.storage[maxIndex];
      this.storage[maxIndex] = this.storage[targetIndex];
      this.storage[targetIndex] = targetValue;
      targetIndex = maxIndex;
    }
    return maxNum;
  }
}

let result = "";

const maxHeap = new MaxHeap();

for (let num of ary) {
  if (num === 0) {
    result += maxHeap.storage.length === 1 ? `0\n` : `${maxHeap.delete()}\n`;
  } else {
    maxHeap.insert(num);
  }
}

console.log(result.trim());
