// No.11053 가장 긴 증가하는 부분 수열
// 수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열을 구하는 프로그램을 작성하시오.

// 예를 들어, 수열 A = {10, 20, 10, 30, 20, 50} 인 경우에 가장 긴 증가하는 부분 수열은 A = {10, 20, 10, 30, 20, 50} 이고, 길이는 4이다.

let [N, input] = ["6", "10 20 10 30 20 50"];
N = Number(N);
input = input.split(" ").map((num) => Number(num));

let temp = 0;
let max = 0;
const ary = [];

for (let num of input) {
  if (ary.length === 0) {
    ary.push([num, 1]);
    max = 1;
    continue;
  }

  for (let i = ary.length - 1; i >= 0; i--) {
    if (ary[i][0] < num && ary[i][1] > temp) {
      temp = ary[i][1];
    }
  }
  ary.push([num, temp + 1]);
  max = max < temp + 1 ? temp + 1 : max;
  temp = 0;
}

console.log(max);
