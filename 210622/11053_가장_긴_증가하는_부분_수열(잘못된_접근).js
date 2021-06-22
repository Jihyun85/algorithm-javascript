// No.11053 가장 긴 증가하는 부분 수열
// 수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열을 구하는 프로그램을 작성하시오.

// 예를 들어, 수열 A = {10, 20, 10, 30, 20, 50} 인 경우에 가장 긴 증가하는 부분 수열은 A = {10, 20, 10, 30, 20, 50} 이고, 길이는 4이다.

// let [N, input] = ["12", "10 20 9 10 20 30 50 40 41 42 37 60"];
// N = Number(N);
// input = input.split(" ").map((num) => Number(num));
// const ary = new Array(1001).fill(0);

// let max = 1;
// let temp = 0;

// for (let i = 0; i < N; i++) {
//   let target = input[i];

//   if (i === 0) {
//     ary[target] = 1;
//     continue;
//   }

//   for (let j = target - 1; j >= 0; j--) {
//     if (ary[j]) {
//       if (ary[j] > temp) temp = ary[j];
//     } else {
//       ary[target] = 1;
//     }
//   }
//   ary[target] = temp + 1;
//   if (ary[target] > max) max = ary[target];
// }

// console.log(max);
