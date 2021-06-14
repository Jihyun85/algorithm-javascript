// No.2941 크로아티아 알파벳
// 예전에는 운영체제에서 크로아티아 알파벳을 입력할 수가 없었다. 따라서, 다음과 같이 크로아티아 알파벳을 변경해서 입력했다.

// 예를 들어, ljes=njak은 크로아티아 알파벳 6개(lj, e, š, nj, a, k)로 이루어져 있다. 단어가 주어졌을 때, 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.
// dž는 무조건 하나의 알파벳으로 쓰이고, d와 ž가 분리된 것으로 보지 않는다. lj와 nj도 마찬가지이다. 위 목록에 없는 알파벳은 한 글자씩 센다.

// ⭐입력 : 첫째 줄에 최대 100글자의 단어가 주어진다. 알파벳 소문자와 '-', '='로만 이루어져 있다.
// 단어는 크로아티아 알파벳으로 이루어져 있다. 문제 설명의 표에 나와있는 알파벳은 변경된 형태로 입력된다

// ⭐출력 : 입력으로 주어진 단어가 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.

// let fs = require("fs");
// let word = fs.readFileSync("/dev/stdin").toString().trim();

// let word = "f";

// function convertAlphabet(word) {
//   let count = 0;
//   let i = word.length - 1;

//   while (i >= 0) {
//     switch (word[i]) {
//       case "=":
//         if (word[i - 1] === "z" && word[i - 2] === "d") {
//           i -= 3;
//         } else if (["c", "s", "z"].indexOf(word[i]) !== -1) {
//           i -= 2;
//         }
//         count++;
//         break;
//       case "-":
//         i -= 2;
//         count++;
//         break;
//       case "j":
//         if (word[i - 1] === "l" || word[i - 1] === "n") {
//           i -= 2;
//         } else {
//           i -= 1;
//         }
//         count++;
//         break;
//       default:
//         i -= 1;
//         count++;
//         break;
//     }
//   }
//   return count;
// }

// console.log(convertAlphabet(word));

// 계속 틀렸던 이유.. trim() 안해줘서.....
// 그런데 코드가 많이 더럽다.............
function convertAlphabet2(word) {
  let count = 0;
  let i = word.length - 1;

  while (i >= 0) {
    let char = word[i];
    switch (char) {
      case "=":
        if (word[i - 1] === "z" && word[i - 2] === "d") {
          i = i - 3;
          count++;
        } else if (
          word[i - 1] === "c" ||
          word[i - 1] === "s" ||
          word[i - 1] === "z"
        ) {
          i = i - 2;
          count++;
        } else {
          i = i - 1;
        }
        break;
      case "-":
        if (word[i - 1] === "c" || word[i - 1] === "d") {
          i = i - 2;
          count++;
        } else {
          i = i - 1;
        }
        break;
      case "j":
        if (word[i - 1] === "n" || word[i - 1] === "l") {
          i = i - 2;
          count++;
        } else {
          i = i - 1;
          count++;
        }
        break;
      default:
        i = i - 1;
        count++;
    }
  }
  return count;
}

console.log(convertAlphabet2("dz=adz="));

{
  // 서치하면서 알게된 기가막힌 코드...
  const fs = require("fs");
  const input = (
    process.platform === "linux"
      ? fs.readFileSync("/dev/stdin").toString()
      : `ljes=njak`
  ).trim();

  let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

  function solution(input) {
    for (let alphabet of croatia) {
      input = input.split(alphabet).join("Q");
    }

    return input.length; // return input일 경우 QeQQak를 반환한다.
  }

  console.log(solution(input));
}
