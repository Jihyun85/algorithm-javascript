// No.2579 계단 오르기

let floors = [6, 10, 20, 15, 25, 10, 20];

let N = floors[0];

let dp = new Array(N);
dp[0] = 0;
dp[1] = floors[1];
dp[2] = floors[1] + floors[2];

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(
    dp[i - 2] + floors[i],
    dp[i - 3] + floors[i - 1] + floors[i]
  );
}

console.log(dp[N]);
