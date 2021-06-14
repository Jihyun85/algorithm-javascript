// No.2588 곱셈
// (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
// (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

// 입력 : 첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.
// 출력 : 첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

/* 가짜 데이터 */
// let x = "472";
// let y = "385";

/* --------- */

// let fs = require("fs");
// let [x, y] = fs.readFileSync("/dev/stdin").toString().split("\n");

function multiple(x, y) {
  let numX = Number(x);
  let yAry = y.split("");

  let third = numX * Number(yAry[2]);
  let fourth = numX * Number(yAry[1]);
  let fifth = numX * Number(yAry[0]);
  let result = fifth * 100 + fourth * 10 + third;

  console.log(third);
  console.log(fourth);
  console.log(fifth);
  console.log(result);
}

multiple(x, y);
