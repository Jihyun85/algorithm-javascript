// 그러면 처음부터 1~100을 순차적으로 탐색하는 것보다
// 반씩 후보를 줄이면서 탐색하는 게 얼마나 더 효율적일까요?

// array 를 따라가면서 target 이 존재한다면 True 를 반환하고,
// 끝까지 없다면 False 를 반환하는 간단한 코드입니다!

const target_num = 14;
const numAry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function isExistingTargetNumBinary(target, array) {
  let currentMin = 0;
  let currentMax = array.length - 1;
  let currentMid = Math.floor((currentMin + currentMax) / 2);

  while (currentMin <= currentMax) {
    console.log(currentMin, currentMax, currentMid);

    if (array[currentMid] == target) {
      return true;
    } else if (array[currentMid] < target) {
      currentMin = currentMid + 1;
    } else {
      currentMax = currentMid - 1;
    }
    currentMid = Math.floor((currentMin + currentMax) / 2);
  }
  return False;
}

const result = isExistingTargetNumBinary(target_num, numAry);
console.log(result);
