// No.1300 k번째 수 다시 풀어보기

let [N, k] = [9, 15];

let left = 1;
let right = k;
let answer = 0;

while (left <= right) {
  let count = 0;
  let mid = Math.floor((left + right) / 2); // 중간값
  for (let i = 1; i <= N; i++) {
    count += Math.min(Math.floor(mid / i), N); // 각 행에서 mid보다 작은 값이 몇 개인지
  }
  if (count < k) left = mid + 1;
  else {
    answer = mid;
    right = mid - 1;
  }
}

console.log(answer);
