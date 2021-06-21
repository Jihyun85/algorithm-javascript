// No.11399 ATM

// 줄을 서 있는 사람의 수 N과 각 사람이 돈을 인출하는데 걸리는 시간 Pi가 주어졌을 때, 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 구하는 프로그램을 작성하시오.

// ⭐입력 : 첫째 줄에 사람의 수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄에는 각 사람이 돈을 인출하는데 걸리는 시간 Pi가 주어진다. (1 ≤ Pi ≤ 1,000)

// ⭐출력 : 첫째 줄에 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 출력한다.

// map 을 이용할까??

let input = ["5", "3 1 4 3 2"];
let n = Number(input[0]);
let ary = input[1]
  .split(" ")
  .map((num) => Number(num))
  .sort((a, b) => a - b);

let waitingTime = 0;
let totalTime = 0;

for (let time of ary) {
  totalTime += waitingTime + time;
  waitingTime += time;
}

console.log(totalTime);
