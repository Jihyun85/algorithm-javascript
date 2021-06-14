// 사칙연산
// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.

// 입력 : 두 자연수 A와 B가 주어진다.  (1 ≤ A, B ≤ 10,000)
// 출력 : 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

let fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(function (a) {
    return +a;
  });

let x = input[0];
let y = input[1];

let sum = x + y;
let minus = x - y;
let multiple = x * y;
let share = Math.floor(x / y);
let remainder = x % y;

console.log(sum);
console.log(minus);
console.log(multiple);
console.log(share);
console.log(remainder);
