// No.1934 최소공배수
// 두 자연수 A와 B에 대해서, A의 배수이면서 B의 배수인 자연수를 A와 B의 공배수라고 한다. 이런 공배수 중에서 가장 작은 수를 최소공배수라고 한다. 예를 들어, 6과 15의 공배수는 30, 60, 90등이 있으며, 최소 공배수는 30이다.

// 두 자연수 A와 B가 주어졌을 때, A와 B의 최소공배수를 구하는 프로그램을 작성하시오.

// ⭐입력 : 첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 둘째 줄부터 T개의 줄에 걸쳐서 A와 B가 주어진다. (1 ≤ A, B ≤ 45,000)
// ⭐출력 : 첫째 줄부터 T개의 줄에 A와 B의 최소공배수를 입력받은 순서대로 한 줄에 하나씩 출력한다.

// 10대 때 배운 일반적인 방법으로는 진짜 말도안되게 오래걸린다ㅎㅎㅎㅎㅎㅎㅎㅎ
// 유클리드 호제법 이라는 것을 사용해서 풀어보도록 한다. (https://velog.io/@yerin4847/W1-유클리드-호제법)

let input = ["6", "1 45000", "6 10", "13 17", "4 32", "10 10", "2 1"];
let result = "";

let greatestCommonFactor = 1;

for (let i = 1; i <= Number(input[0]); i++) {
  let [max, min] = input[i]
    .split(" ")
    .map((num) => Number(num))
    .sort((a, b) => b - a);
  leastCommonMultiple(max, min);
}

function leastCommonMultiple(max, min) {
  greatestCommonFactor = 1; // 초기화

  if (max === min) {
    console.log(min);
    return;
  }

  euclid(max, min);
  max /= greatestCommonFactor;
  min /= greatestCommonFactor;

  return console.log(max * min * greatestCommonFactor);
}

function euclid(max, min) {
  let remainder = max % min;
  if (remainder === 0) {
    greatestCommonFactor = min;
    return;
  }
  euclid(min, remainder);
}
