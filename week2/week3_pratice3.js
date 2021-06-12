const numbers = [2, 3, 1];
const targetNumber = 0;
let count = 0;

function plusOrMinus(array, target, currentIndex, currentSum) {
  if (currentIndex === array.length) {
    if (currentSum === target) {
      count += 1;
    }
    return;
  }
  plusOrMinus(
    array,
    targetNumber,
    currentIndex + 1,
    currentSum + array[currentIndex]
  );
  plusOrMinus(
    array,
    targetNumber,
    currentIndex + 1,
    currentSum - array[currentIndex]
  );
}

plusOrMinus(numbers, targetNumber, 0, 0, count);

console.log(count);
