// No.1149 RGB 거리
// RGB거리에는 집이 N개 있다. 거리는 선분으로 나타낼 수 있고, 1번 집부터 N번 집이 순서대로 있다.

// 집은 빨강, 초록, 파랑 중 하나의 색으로 칠해야 한다. 각각의 집을 빨강, 초록, 파랑으로 칠하는 비용이 주어졌을 때, 아래 규칙을 만족하면서 모든 집을 칠하는 비용의 최솟값을 구해보자.

//   - 1번 집의 색은 2번 집의 색과 같지 않아야 한다.
//   - N번 집의 색은 N-1번 집의 색과 같지 않아야 한다.
//   - i(2 ≤ i ≤ N-1)번 집의 색은 i-1번, i+1번 집의 색과 같지 않아야 한다.
const [n, ...ary] = ["3", "26 40 57", "49 60 57", "13 89 99"];

for (let i = 0; i < Number(n); i++) {
  ary[i] = ary[i].split(" ").map((cost) => Number(cost));
}

const stack = [];
let minCost = 0;
let sum = 0;
let previousIndex; // 0이면 RED / 1이면 GREEN / 2이면 BLUE

function getMinCost(depth, n, ary) {
  if (depth === n) {
    if (minCost === 0) minCost = sum;
    else minCost = sum < minCost ? sum : minCost;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (i !== previousIndex) {
      stack.push(i);
      previousIndex = i;
      sum += ary[depth][i];
      getMinCost(depth + 1, n, ary);
      previousIndex = stack.pop();
      sum -= ary[depth][i];
    }
  }
}

getMinCost(0, Number(n), ary);

console.log(minCost);
