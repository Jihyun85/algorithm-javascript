const input = [4, 6, 2, 9, 1];

function insertionSort(array) {
  for (let i in array) {
    let index = i;
    while (array[index] !== undefined && array[index - 1] > array[index]) {
      let temp = array[index - 1];
      array[index - 1] = array[index];
      array[index] = temp;
      index--;
    }
  }
  return array;
}

const result = insertionSort(input);
console.log(result);
