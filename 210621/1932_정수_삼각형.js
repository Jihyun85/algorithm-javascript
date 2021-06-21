// No.1932 정수 삼각형
// 맨 위층 7부터 시작해서 아래에 있는 수 중 하나를 선택하여 아래층으로 내려올 때,
// 이제까지 선택된 수의 합이 최대가 되는 경로를 구하는 프로그램을 작성하라.
// 아래층에 있는 수는 현재 층에서 선택된 수의
// 대각선 왼쪽 또는 대각선 오른쪽에 있는 것 중에서만 선택할 수 있다.

// 삼각형의 크기는 1 이상 500 이하이다.
// 삼각형을 이루고 있는 각 수는 모두 정수이며, 범위는 0 이상 9999 이하이다.

let [n, ...ary] = ["5", "7", "3 8", "8 1 0", "2 7 4 4", "4 5 2 6 5"];

n = Number(n);

const dp = Array.from(new Array(n), () => new Array(n).fill(0));
dp[0][0] = Number(ary[0]);

for (let i = 1; i < n; i++) {
  const nums = ary[i].split(" ").map((num) => Number(num));
  const length = nums.length;

  for (let j = 0; j < length; j++) {
    if (j === 0) dp[i][j] = dp[i - 1][j] + nums[j];
    else if (j === length - 1) dp[i][j] = dp[i - 1][j - 1] + nums[j];
    else dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + nums[j];
  }
}

const result = Math.max.apply(null, dp[n - 1]);
console.log(result);
