// No.1149 RGB 거리 (dp편)

let [n, ...ary] = ["3", "26 40 83", "49 60 57", "13 89 99"];

n = Number(n);

const dp = Array.from(new Array(n), () => new Array(n));

dp[0] = ary[0].split(" ").map((num) => Number(num));

for (let i = 1; i < n; i++) {
  let [R, G, B] = ary[i].split(" ").map((num) => Number(num));
  let valueR = Math.min(R + dp[i - 1][1], R + dp[i - 1][2]);
  let valueG = Math.min(G + dp[i - 1][0], G + dp[i - 1][2]);
  let valueB = Math.min(B + dp[i - 1][0], B + dp[i - 1][1]);
  dp[i] = [valueR, valueG, valueB];
}

console.log(Math.min(...dp[n - 1]));
