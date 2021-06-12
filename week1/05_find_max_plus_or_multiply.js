// def find_max_plus_or_multiply(array):
//     # 이 부분을 채워보세요!
//     return 1

// result = find_max_plus_or_multiply

let input = [0, 3, 5, 6, 1, 2, 4];

function findMaxPlusOrMultiply(array) {
  let multiply_sum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= 1 || multiply_sum <= 1) {
      multiply_sum += array[i];
    } else {
      multiply_sum *= array[i];
    }
  }
  return multiply_sum;
}

let result = findMaxPlusOrMultiply(input);
console.log(result);
console.log(findMaxPlusOrMultiply([3, 2, 1, 5, 9, 7, 4]));
