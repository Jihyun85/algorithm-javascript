// 피보나치 수열 - 재귀함수 ver

let input = 100;

function fiboRecursive(n) {
  if (n === 1 || n === 2) return 1;
  return fiboRecursive(n - 1) + fiboRecursive(n - 2);
}

// fiboRecursive(19) + fiboRecursive(18)
// (fiboRecursive(18) + fiboRecursive(17)) + (fiboRecursive(17) + fiboRecursive(16)) …………………

console.log(fiboRecursive(input));
