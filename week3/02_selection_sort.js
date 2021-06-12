let input = [4, 6, 2, 9, 1];

function selectionSort(array) {
  let minIndex;
  let temp;

  for (let i = 0; i < array.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
  }

  return array;
}

console.log(selectionSort(input));
