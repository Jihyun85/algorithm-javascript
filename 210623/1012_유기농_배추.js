// No.1012 유기농 배추
let [T, ...input] = [
  "2",
  "10 8 17",
  "0 0",
  "1 0",
  "1 1",
  "4 2",
  "4 3",
  "4 5",
  "2 4",
  "3 4",
  "7 4",
  "8 4",
  "9 4",
  "7 5",
  "8 5",
  "9 5",
  "7 6",
  "8 6",
  "9 6",
  "10 10 1",
  "5 5",
];

T = Number(T);
function getEarthWorm(M, N, caseAry) {
  function check(i, j) {
    ary[i][j] = -1;

    if (i - 1 >= 0 && ary[i - 1][j] === 1) check(i - 1, j);
    if (j - 1 >= 0 && ary[i][j - 1] === 1) check(i, j - 1);
    if (j + 1 < N && ary[i][j + 1] === 1) check(i, j + 1);
    if (i + 1 < M && ary[i + 1][j] === 1) check(i + 1, j);
  }

  if (caseAry.length === 0) {
    console.log(0);
    return;
  }
  if (caseAry.length === 1) {
    console.log(1);
    return;
  }

  let ary = Array.from(new Array(M), () => new Array(N).fill(0));

  for (let location of caseAry) {
    let [x, y] = location.split(" ").map((num) => Number(num));
    ary[x][y] = 1;
  }

  let worm = 0;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (ary[i][j] !== -1) {
        if (ary[i][j] === 1) {
          check(i, j);
          worm++;
        }
      }
    }
  }

  console.log(worm);
}

for (let i = 1; i <= T; i++) {
  let [M, N, K] = input
    .shift()
    .split(" ")
    .map((num) => Number(num));
  let caseAry = input.splice(0, K);

  getEarthWorm(M, N, caseAry);
}
