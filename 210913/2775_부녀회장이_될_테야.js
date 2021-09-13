// No.2775 부녀회장이 될 테야
// 평소 반상회에 참석하는 것을 좋아하는 주희는 이번 기회에 부녀회장이 되고 싶어 각 층의 사람들을 불러 모아 반상회를 주최하려고 한다.

// 이 아파트에 거주를 하려면 조건이 있는데, “a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다” 는 계약 조항을 꼭 지키고 들어와야 한다.

// 아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때, 주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라. 단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.

// ⭐입력 : 첫 번째 줄에 Test case의 수 T가 주어진다. 그리고 각각의 케이스마다 입력으로 첫 번째 줄에 정수 k, 두 번째 줄에 정수 n이 주어진다
// ⭐출력 : 각각의 Test case에 대해서 해당 집에 거주민 수를 출력하라.
// 1 ≤ k, n ≤ 14

// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
// let [T, ...arr] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

let [T, ...arr] = [3, 1, 3, 2, 3, 3, 5];
T = parseInt(T);
arr = arr.map((num) => parseInt(num));

function countPerson(k, n) {
  if (n === 1) return 1;
  const ary = Array.from(new Array(k + 1), () => new Array(n + 1).fill(null));
  ary[0] = ary[0].map((_, i) => i);

  for (let i = 1; i <= k; i++) {
    for (let j = 0; j <= n; j++) {
      if (j === 0) ary[i][j] = 0;
      else ary[i][j] = ary[i][j - 1] + ary[i - 1][j];
    }
  }

  return ary[k][n];
}

for (let i = 0; i < T * 2; i = i + 2) {
  console.log(countPerson(arr[i], arr[i + 1]));
}
