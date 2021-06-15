// No.1929 소수 구하기
// M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

// ⭐입력: 첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.
// ⭐출력: 한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.

// 성능이 너무 안좋은데요....

let fs = require("fs");
let [min, max] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((num) => Number(num));

// 가짜 데이터
// let [min, max] = [2, 101];

let ary = new Array(max + 1).fill(true);
ary[0] = false;
ary[1] = false;

for (let i = 2; i <= max; i++) {
  let root = Math.sqrt(max);
  for (let j = 2; j <= root; j++) {
    if (i !== j && i % j === 0) {
      ary[i] = false;
      break;
    }
  }
}

for (let i = min; i <= max; i++) {
  ary[i] === true ? console.log(i) : null;
}
