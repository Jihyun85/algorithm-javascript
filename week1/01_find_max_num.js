// 최대값 찾기
let input = [3, 5, 6, 11, 2, 4];

function findMaxNum(array) {
  return array.sort()[0];
}

function findMaxNum2(array) {
  let max_num = array[0];
  for (let num of array) {
    if (num > max_num) {
      max_num = num;
    }
  }
  return max_num;
}

let result = findMaxNum(input);
console.log(result);

let result2 = findMaxNum2(input);
console.log(result2);
