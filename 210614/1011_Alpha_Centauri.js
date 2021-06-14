// No.1011 Fly me to the Alpha Centauri
// https://www.acmicpc.net/problem/1011 문제 링크 (문제가 너무 길다... 이미지도 있음...)

// 풀이 과정
// 주어진 x, y 사이의 거리를 N이라고 하면,
// √N 보다 작은 정수 중 가장 가까운 수 n을 가지고 (n의 제곱 + (n+1)의 제곱 ) / 2를 해서 그 값을 average라고 한다.
// average보다 N이 작으면, 2n만큼이 최솟값이 되고
// average보다 N이 크면, 2n+1이 최솟값이 된다. (이 때 average는 절대 정수가 나올 수 있으므로 같을 때는 고려할 필요가 없다.)
// 예외로 n의 제곱수가 N인 경우에는 최솟값이 2n - 1이 된다.

// let fs = require("fs");
// let input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split("\n");

let input = ["3", "0 3", "1 5", "45 50"];

let caseNum = Number(input[0]);

for (let i = 1; i <= caseNum; i++) {
  let [x, y] = input[i].split(" ").map((num) => Number(num));
  let distance = y - x;
  console.log(getMinWork(distance));
}

function getMinWork(distance) {
  let minWorkNum;
  let squareRoot = Math.sqrt(distance);
  let intSquareRoot = parseInt(squareRoot);
  if (squareRoot === intSquareRoot) {
    minWorkNum = intSquareRoot * 2 - 1;
    return minWorkNum;
  }

  let average = (intSquareRoot ** 2 + (intSquareRoot + 1) ** 2) / 2; // 절대 정수로 안나옴:)
  if (distance < average) {
    minWorkNum = 2 * intSquareRoot;
  } else {
    minWorkNum = 2 * intSquareRoot + 1;
  }

  return minWorkNum;
}
