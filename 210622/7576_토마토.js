let [condition, ...graph] = ["2 2", "1 -1", "-1 1"];

let [N, M] = condition.split(" ").map((num) => Number(num));
graph = graph.map((str) => str.split(" ").map((num) => Number(num)));

let normal = [];
let blankCount = 0;

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 1) normal.push([i, j]);
    else if (graph[i][j] === -1) blankCount++;
  }
}

let currentTomato = normal.length;
let totalTomato = N * M - blankCount;
let days = 0;
let tomato = currentTomato;
let ary = [];

function convertGraph(a, b) {
  graph[a][b] = 1;
  ary.push([a, b]);
  tomato++;
}

while (currentTomato !== totalTomato) {
  for (let i = 0; i < normal.length; i++) {
    const [x, y] = normal[i];
    // 상하좌우 다 1로 바꿔주고 ary에 추가해주기
    if (x - 1 >= 0 && graph[x - 1][y] === 0) convertGraph(x - 1, y, tomato);
    if (y - 1 >= 0 && graph[x][y - 1] === 0) convertGraph(x, y - 1, tomato);
    if (y + 1 < N && graph[x][y + 1] === 0) convertGraph(x, y + 1, tomato);
    if (x + 1 < M && graph[x + 1][y] === 0) convertGraph(x + 1, y, tomato);
  }

  if (tomato === currentTomato && currentTomato !== totalTomato) {
    days = -1;
    break;
  }

  days++;
  normal = ary;
  ary = [];
  currentTomato = tomato;
}

console.log(days);
