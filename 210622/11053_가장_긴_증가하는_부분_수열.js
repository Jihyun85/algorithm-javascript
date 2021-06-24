// No.11053 가장 긴 증가하는 부분 수열
// 수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열을 구하는 프로그램을 작성하시오.

// 예를 들어, 수열 A = {10, 20, 10, 30, 20, 50} 인 경우에 가장 긴 증가하는 부분 수열은 A = {10, 20, 10, 30, 20, 50} 이고, 길이는 4이다.

let [N, input] = ["10", "7 10 8 10 1 2 9 9 1 10"];
N = Number(N);
input = input.split(" ").map((num) => Number(num));

let ary = [0];

for (let num of input) {
  if (ary[ary.length - 1] < num) {
    ary.push(num);
    continue;
  }

  let left = 0;
  let right = ary.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (ary[mid] < num) left = mid + 1;
    else right = mid - 1;
  }
  ary[right + 1] = num;
}

console.log(ary.length - 1);
