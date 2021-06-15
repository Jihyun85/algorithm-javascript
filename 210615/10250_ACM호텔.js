// No.10250 ACM 호텔
// https://www.acmicpc.net/problem/10250 참고 (문제도 많고 이미지도 많다...)

const input = ["3", "6 12 10", "30 50 72", "12 24 24"];

const testCase = Number(input[0]);

function setRoomNum(H, W, N) {
  let floor = N % H === 0 ? String(H) : String(N % H);
  let order = Math.ceil(N / H);
  let result = order < 10 ? floor + "0" + String(order) : floor + String(order);
  console.log(result);
}

for (let i = 1; i <= testCase; i++) {
  let [H, W, N] = input[i].split(" ").map((num) => Number(num));
  setRoomNum(H, W, N);
}
