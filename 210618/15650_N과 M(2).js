// No.18650 N과 M(2)
// 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

//   - 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
//   - 고른 수열은 오름차순이어야 한다.

// ⭐입력 : 첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)
// ⭐출력 : 한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.
// 수열은 사전 순으로 증가하는 순서로 출력해야 한다.

let [N, M] = [4, 2];

let visited = new Array(N).fill(false);
let current = [];
let result = "";

function dfs(depth, start, N, M) {
  if (depth === M) {
    let resultStr = current.join(" ");
    result += `${resultStr}\n`;
    return;
  }

  for (let i = start; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      current.push(i + 1);
      dfs(depth + 1, i + 1, N, M);
      visited[i] = false;
      current.pop();
    }
  }
}

dfs(0, 0, N, M);
console.log(result.trim());
