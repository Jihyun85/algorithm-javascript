// 재귀함수를 사용하지 않은 ver

const input = "abcba";

// function palindrome(string) {
//   let n = string.length;
//   for (let i = 0; i < n; i++) {
//     if (string[i] !== string[n - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// 재귀함수 ver

function is_palindrome(string) {
  if (string.length <= 1) {
    return true;
  }
  if (string[0] !== string[string.length - 1]) {
    return false;
  }
  return is_palindrome(string.slice(1, string.length - 1));
}

let result = is_palindrome(input);
console.log(result);
