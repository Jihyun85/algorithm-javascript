// 소수 나열하기

// 정수를 입력했을 때, 그 정수 이하의 소수를 모두 반환하시오.
// 소수는 자신보다 작은 두 개의 자연수를 곱하여 만들 수 없는 1보다 큰 자연수이다.

// 20이 입력된다면 아래와 같이 반환해야 합니다!
// [2, 3, 5, 7, 11, 13, 17, 19]

function findPrimeNum(n) {
  let resultAry = [];
  for (let i = 2; i <= n; i++) {
    let primeNum = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        primeNum = false;
      }
    }
    if (primeNum) {
      resultAry.push(i);
    }
  }
  return resultAry;
}

const result = findPrimeNum(20);
console.log(result);
