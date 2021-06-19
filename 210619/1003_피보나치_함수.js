// No.1003 피보나치 함수

// fibonacci(3)을 호출하면 다음과 같은 일이 일어난다.

//   - fibonacci(3)은 fibonacci(2)와 fibonacci(1) (첫 번째 호출)을 호출한다.
//   - fibonacci(2)는 fibonacci(1) (두 번째 호출)과 fibonacci(0)을 호출한다.
//   - 두 번째 호출한 fibonacci(1)은 1을 출력하고 1을 리턴한다.
//   - fibonacci(0)은 0을 출력하고, 0을 리턴한다.
//   - fibonacci(2)는 fibonacci(1)과 fibonacci(0)의 결과를 얻고, 1을 리턴한다.
//   - 첫 번째 호출한 fibonacci(1)은 1을 출력하고, 1을 리턴한다.
//   - fibonacci(3)은 fibonacci(2)와 fibonacci(1)의 결과를 얻고, 2를 리턴한다.

// 1은 2번 출력되고, 0은 1번 출력된다. N이 주어졌을 때, fibonacci(N)을 호출했을 때, 0과 1이 각각 몇 번 출력되는지 구하는 프로그램을 작성하시오.

let input = [3, 0, 1, 3];

let dp = new Array(41);
dp[0] = [1, 0];
dp[1] = [0, 1];

for (let i = 2; i <= 41; i++) {
  dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
}

for (let i = 1; i <= Number(input[0]); i++) {
  console.log(dp[input[i]].join(" "));
}
