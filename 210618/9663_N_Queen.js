// No.9663 N_Queen
// N-Queen 문제는 크기가 N × N인 체스판 위에 퀸 N개를 서로 공격할 수 없게 놓는 문제이다.
// N이 주어졌을 때, 퀸을 놓는 방법의 수를 구하는 프로그램을 작성하시오.

// ⭐입력 : 첫째 줄에 N이 주어진다. (1 ≤ N < 15)
// ⭐출력 : 첫째 줄에 퀸 N개를 서로 공격할 수 없게 놓는 경우의 수를 출력한다.

// 해냈다!!!!!!!!!!!!!!!!!!!!!!!

// 가장 많이 고민했던 부분 : 어떻게 되돌릴까? 단순히 true/false로 하면 되돌릴 수가 없다. => -값으로 만들어주기로 했다.

// let N = 1;
let N = 8;

let graph = Array.from(new Array(N), () => new Array(N).fill(0));
let count = 0;
let ary = [];

function dfs(depth, N) {
  let thisLine = false;
  // 재귀를 끝낼 조건
  if (depth === N) {
    count++;
    return;
  }
  // 깊이 때문에 for문을 두 번 돌릴 필요가 없는거야
  for (let i = 0; i < N; i++) {
    if (graph[depth][i] === 0) {
      thisLine = true;
      // 0은 아직 판단되지 않은 곳
      graph[depth][i] = "Q";
      // graph에서 접근 불가능한 곳을 마이너스값으로 만들기
      for (let j = 0; j < N; j++) {
        if (j !== i) graph[depth][j] -= 1;
        if (j !== depth) graph[j][i] -= 1;
        if (j !== 0 && depth + j < N && i + j < N) graph[depth + j][i + j] -= 1;
        if (j !== 0 && depth + j < N && i - j >= 0)
          graph[depth + j][i - j] -= 1;
      }
      // 재귀함수
      dfs(depth + 1, N);
      graph[depth][i] = 0;
      // 그래프 다시 되돌리기
      for (let j = 0; j < N; j++) {
        if (j !== i) graph[depth][j] += 1;
        if (j !== depth) graph[j][i] += 1;
        if (j !== 0 && depth + j < N && i + j < N) graph[depth + j][i + j] += 1;
        if (j !== 0 && depth + j < N && i - j >= 0)
          graph[depth + j][i - j] += 1;
      }
    }
  }
  if (!thisLine) return;
}

dfs(0, N);
console.log(count);
