// 최대값 찾기
let input = [3, 5, 6, 1, 2, 4];

function findMaxNum(array) {
  return array.sort((a, b) => b - a)[0];
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

function findMaxNum3(array) {
  let found = true;
  for (let num of array) {
    for (compareNum of array) {
      if (num < compareNum) {
        found = false;
        break;
      }
    }
    if (found) {
      console.log(num);
      break;
    }
  }
}

// let result = findMaxNum([3, 5, 6, 1, 2, 4]);
// console.log(result);

// let result2 = findMaxNum2([3, 5, 6, 1, 2, 4]);
// console.log(result2);

findMaxNum3(input);

// 승빈님이 주신 해답:) - 강의 첫번째 풀이 ver
{
  let input = [3, 5, 6, 1, 2, 4];

  for (const num of input) {
    let found = true;
    for (const compare of input) {
      if (num < compare) {
        found = false;
        break;
      }
    }
    if (found) {
      console.log(num);
      break;
    }
  }
}
