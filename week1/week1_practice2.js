// 문자열 뒤집기
// 주어진 문자열을 모두 0 혹은 모두 1로 같게 만드는 최소 횟수를 반환하시오.

let input = "011110";

// function convertNumString(numString) {
//   let standard = numString[0];
//   console.log(typeof standard);
//   let count = 0;
//   let continuity = 0;

//   for (let i = 0; i < numString.length; i++) {
//     if (standard === numString[i]) {
//       continuity++;
//     } else {
//       standard = string[i];
//       continuity = 1;
//       count++;
//     }
//   }

//   return count;
// }

// console.log(convertNumString("100001"));

function findCount(numString) {
  countToAllZero = 0;
  countToAllOne = 0;

  if (numString[0] === "0") {
    countToAllOne += 1;
  } else if (numString[0] === "1") {
    countToAllZero += 1;
  }

  for (let i = 0; i < numString.length - 1; i++) {
    if (numString[i] !== numString[i + 1]) {
      if (numString[i + 1] === "0") {
        countToAllOne += 1;
      }
      if (numString[i + 1] === "1") {
        countToAllZero += 1;
      }
    }
  }

  return Math.min(countToAllZero, countToAllOne);
}

let result = findCount(input);
console.log(result);
