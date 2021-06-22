// No.2667 단지번호붙이기
let [N, ...graph] = ["5", "01101", "01101", "11100", "00011", "00100"];

N = Number(N);
graph = graph.map((str) => str.split("").map((num) => Number(num)));

let visited = Array.from(new Array(N), () => new Array(N).fill(false)); // false 아직 방문x
let unit = 0;
let count = 0;
let result = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      if (graph[i][j] !== 0) {
        checkHouse(i, j);
        unit++;
        result.push(count);
        count = 0;
      }
    }
  }
}

function checkHouse(i, j) {
  visited[i][j] = true;
  count++;

  if (i - 1 >= 0 && visited[i - 1][j] === false && graph[i - 1][j] === 1)
    checkHouse(i - 1, j);

  if (j + 1 < N && visited[i][j + 1] === false && graph[i][j + 1] === 1)
    checkHouse(i, j + 1);

  if (i + 1 < N && visited[i + 1][j] === false && graph[i + 1][j] === 1)
    checkHouse(i + 1, j);

  if (j - 1 >= 0 && visited[i][j - 1] === false && graph[i][j - 1] === 1)
    checkHouse(i, j - 1);

  return;
}

console.log(unit);
console.log(
  result
    .sort((a, b) => a - b)
    .join("\n")
    .trim()
);
