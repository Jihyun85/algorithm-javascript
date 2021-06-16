// No.11050 이항계수
// 자연수 N과 정수 K가 주어졌을 때 이항 계수 자연수 과 정수 가 주어졌을 때 이항 계수 를 구하는 프로그램을 작성하시오.
// 이항 계수 = 조합 ? nCk ?

// 이렇게 만들 수 있었던 건 N이 10이하로 정해져있었기 때문임ㅎㅎ
// 만약 100000 이러면 array에 무턱대고 저장하기는 좀........;

let [N, K] = [5, 0];

let factorialAry = new Array(N + 1).fill(1); // 0! = 1임
let currentValue = 1;

for (let i = 1; i <= N; i++) {
  let calcValue = currentValue * i;
  currentValue = calcValue;
  factorialAry[i] = calcValue;
}

console.log(factorialAry[N] / factorialAry[K] / factorialAry[N - K]);
// let max = K >= N - K ? K : N - K;

// let numerator = 1;
// let denominator = 1;

// for (let i = n; i > max; i--) {
//   denominator *= i;
// }

// for (let i = )
