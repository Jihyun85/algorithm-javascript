// No.1260 DFS와 BFS
// 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.

// ⭐입력 : 첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다. 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.

// ⭐출력 : 첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. V부터 방문된 점을 순서대로 출력하면 된다.

let input = ["4 4 1", "1 2", "2 3", "3 4", "4 1"].map((string) =>
  string.split(" ").map((num) => Number(num))
);
// [ [ 4, 5, 1 ], [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 4 ], [ 3, 4 ] ]

let [N, M, startNode] = input[0];

let graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));
let visited = Array(N + 1).fill(false);

for (let i = 1; i <= M; i++) {
  let [a, b] = input[i];
  graph[a][b] = 1;
  graph[b][a] = 1;
}

function dfs(startNode) {
  let currentNode = startNode;
  visited[currentNode] = true;
  dfsResult.push(currentNode);
  for (let i = 1; i < N + 1; i++) {
    if (visited[i] === false && graph[currentNode][i] === 1) dfs(i);
  }
}

function bfs(startNode) {
  let queue = [startNode];
  let result = [];
  visited[startNode] = true;

  while (queue.length !== 0) {
    let currentNode = queue.shift();
    result.push(currentNode);
    for (let i = 1; i < N + 1; i++) {
      if (visited[i] === false && graph[currentNode][i] === 1) {
        queue.push(i);
        visited[i] = true;
      }
    }
  }
  return result;
}

let dfsResult = [];
let bfsResult;

dfs(startNode);
visited = Array(N + 1).fill(false);
bfsResult = bfs(startNode);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
