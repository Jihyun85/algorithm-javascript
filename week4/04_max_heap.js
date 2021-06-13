class MaxHeap {
  constructor() {
    this.storage = [null];
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
      } else {
        break;
      }
    }
  }

  delete(value) {
    let lastIndex = this.storage.length - 1;
    let temp = this.storage[lastIndex];
    this.storage[lastIndex] = this.storage[1];
    this.storage[1] = temp;
    let targetIndex = 1;
    let prevMax = this.storage.pop();

    while (targetIndex <= this.storage.length - 1) {
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

      let targetValue = this.storage[targetIndex];
      this.storage[targetIndex] = this.storage[maxIndex];
      this.storage[maxIndex] = targetValue;
      targetIndex = maxIndex;
    }
    return prevMax;
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(8);
maxHeap.insert(6);
maxHeap.insert(7);
maxHeap.insert(2);
maxHeap.insert(5);
maxHeap.insert(4);
console.log(maxHeap.storage); // [None, 8, 6, 7, 2, 5, 4]
console.log(maxHeap.delete()); // 8 을 반환해야 합니다!
console.log(maxHeap.storage); // [None, 7, 6, 4, 2, 5]
