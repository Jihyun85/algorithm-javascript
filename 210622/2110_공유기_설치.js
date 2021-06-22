// No.2110 공유기 설치
// 도현이의 집 N개가 수직선 위에 있다. 각각의 집의 좌표는 x1, ..., xN이고, 집 여러개가 같은 좌표를 가지는 일은 없다.

// 도현이는 언제 어디서나 와이파이를 즐기기 위해서 집에 공유기 C개를 설치하려고 한다. 최대한 많은 곳에서 와이파이를 사용하려고 하기 때문에, 한 집에는 공유기를 하나만 설치할 수 있고, 가장 인접한 두 공유기 사이의 거리를 가능한 크게 하여 설치하려고 한다.

// C개의 공유기를 N개의 집에 적당히 설치해서, 가장 인접한 두 공유기 사이의 거리를 최대로 하는 프로그램을 작성하시오.

let [condition, ...ary] = ["3 3", "1", "4", "6"];

let [N, C] = condition.split(" ").map((num) => Number(num));
ary = ary.map((num) => Number(num)).sort((a, b) => a - b);

let left = 1;
let right = ary[N - 1] - ary[0];
let result = 0;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let count = 1;
  let start = ary[0];

  for (let i = 0; i < N; i++) {
    if (mid <= ary[i] - start) {
      count++;
      start = ary[i];
    }
  }

  if (count >= C) {
    result = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(result);

// let left = ary[1] - ary[0];
// let right = ary[N - 1] - ary[0];
// let d = 0;
// let ans = 0;

// while (left < right) {
//   let mid = Math.floor(left + right / 2);
//   let start = ary[0];
//   let count = 1;

//   for (let i = 0; i < N; i++) {
//     d = ary[i] - start; // ary[i]로부터 start까지의 간격
//     if (mid <= d) {
//       count++;
//       start = ary[i];
//     }
//   }

//   if (count === C) {
//     ans = mid;
//     break;
//   } else if (count > C) {
//     ans = mid;
//     left = mid + 1;
//   } else right = mid - 1;
// }

// console.log(ans);
