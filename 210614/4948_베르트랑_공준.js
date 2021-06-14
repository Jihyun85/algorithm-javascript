// No.4948 베르트랑 공준
// 베르트랑 공준은 임의의 자연수 n에 대하여, n보다 크고, 2n보다 작거나 같은 소수는 적어도 하나 존재한다는 내용을 담고 있다.
// 이 명제는 조제프 베르트랑이 1845년에 추측했고, 파프누티 체비쇼프가 1850년에 증명했다.
// 예를 들어, 10보다 크고, 20보다 작거나 같은 소수는 4개가 있다. (11, 13, 17, 19) 또, 14보다 크고, 28보다 작거나 같은 소수는 3개가 있다. (17,19, 23)
// 자연수 n이 주어졌을 때, n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성하시오.

// ⭐입력 : 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 케이스는 n을 포함하는 한 줄로 이루어져 있다. 입력의 마지막에는 0이 주어진다.
// ⭐출력 : 각 테스트 케이스에 대해서, n보다 크고, 2n보다 작거나 같은 소수의 개수를 출력한다.
// ⭐제한 : 1 ≤ n ≤ 123,456

// 에라토스 테네스의 체 (https://velog.io/@max9106/Algorithm-에라토스테네스의-체)

// ❤ 풀이 과정
// 1. 123456*2

const fs = require("fs");

const max = 123456 * 2; // 2n까지 구해야 하니까!!
const ary = new Array(max + 1).fill(true);
ary[0] = false;
ary[1] = false;

for (let i = 2; i <= max; i++) {
  let root = parseInt(Math.sqrt(i));
  for (let j = 2; j <= root; j++) {
    if (i !== j && i % j === 0) {
      ary[i] = false;
      break;
    }
  }
}

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => parseInt(num));

for (let i = 0; i < input.length; i++) {
  if (input[i] === 0) break;
  getPrimeNumCount(input[i]);
}

function getPrimeNumCount(num) {
  let count = 0;
  for (let i = num + 1; i <= num * 2; i++) {
    if (ary[i] === true) count++;
  }
  console.log(count);
}
