// No.2630 색종이 자르기

let input = [
  "8",
  "1 1 0 0 0 0 1 1",
  "1 1 0 0 0 0 1 1",
  "0 0 0 0 1 1 0 0",
  "0 0 0 0 1 1 0 0",
  "1 0 0 0 1 1 1 1",
  "0 1 0 0 1 1 1 1",
  "0 0 1 1 1 1 1 1",
  "0 0 1 1 1 1 1 1",
];

// let input = ["4", "1 1 1 1", "1 1 1 1", "1 1 1 1", "1 1 1 0"];

let N = parseInt(input.shift());

let graph = input.map((row) => row.split(" ").map((num) => parseInt(num)));

let whiteSquare = 0;
let blueSquare = 0;

function findSquare(graph, rowS, rowE, columnS, columnE) {
  let isSame = checkSquare(graph, rowS, rowE, columnS, columnE);
  if (isSame) return;
  else {
    let rowMid = (rowS + (rowE - 1)) / 2;
    let columnMid = (columnS + (columnE - 1)) / 2;

    findSquare(graph, rowS, rowMid, columnS, columnMid);
    findSquare(graph, rowS, rowMid, columnMid + 1, columnE);
    findSquare(graph, rowMid + 1, rowE, columnS, columnMid);
    findSquare(graph, rowMid + 1, rowE, columnMid + 1, columnE);
  }
}

function checkSquare(graph, rowS, rowE, columnS, columnE) {
  let firstValue = graph[rowS][columnS];

  for (let i = rowS; i <= rowE; i++) {
    for (let j = columnS; j <= columnE; j++) {
      if (graph[i][j] !== firstValue) return false;
    }
  }
  firstValue === 0 ? whiteSquare++ : blueSquare++;
  return true;
}

findSquare(graph, 0, N - 1, 0, N - 1);
console.log(whiteSquare);
console.log(blueSquare);
