// 피보나치 수열 - 동적 계획법 사용

const input = 100;
const fiboMemo = [0, 1, 1];

function fiboDynamic(n, fiboMemo) {
  for (let i = 3; i <= n; i++) {
    fiboMemo[i] = fiboMemo[i - 1] + fiboMemo[i - 2];
  }
  return fiboMemo[n];
}

// function fiboDynamic(n, fiboMemo) {
//   if (n === 1 || n === 2) return fiboMemo[n];

//   let nthFibo = fiboDynamic(n - 1) | fiboDynamic(n - 2);
//   fiboMemo[n] = nthFibo;
//   return nthFibo;
// }

console.log(fiboDynamic(input, fiboMemo));
