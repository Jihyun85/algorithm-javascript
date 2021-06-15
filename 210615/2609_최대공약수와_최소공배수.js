// No.2609 최대공약수와 최소공배수
// 두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.

// ⭐입력 : 첫째 줄에는 두 개의 자연수가 주어진다. 이 둘은 10,000이하의 자연수이며 사이에 한 칸의 공백이 주어진다.
// ⭐출력 : 첫째 줄에는 입력으로 주어진 두 수의 최대공약수를, 둘째 줄에는 입력으로 주어진 두 수의 최소 공배수를 출력한다.

let [min, max] = [2412, 3696].sort((a, b) => a - b);
let commonAry = [];

while (true) {
  let isCompleted = true;
  for (let i = 2; i <= min; i++) {
    if (min % i === 0 && max % i === 0) {
      commonAry.push(i);
      min /= i;
      max /= i;
      isCompleted = false;
      break;
    }
  }
  if (isCompleted) break;
}

const leastCommonMultiple = commonAry.reduce((prev, curr) => prev * curr, 1);
const greatestCommonFactor = leastCommonMultiple * min * max;

console.log(leastCommonMultiple);
console.log(greatestCommonFactor);
