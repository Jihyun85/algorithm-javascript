let [N, input] = ["6", "10 20 10 30 20 50"];
N = Number(N);
input = input.split(" ").map((num) => Number(num));

const ary = new Array(N + 1).fill(0);
let max = 0;

let list = [];

for (let num of input) {
  let temp = 0;

  if (list.length === 0) {
    list.push(num);
    ary[num] = 1;
    max = 1;
    continue;
  }

  for (let i = num - 1; i > 0; i--) {
    if (ary[i] > temp) {
      temp = ary[i];
    }
  }

  ary[num] = temp + 1;
  max = temp + 1 > max ? temp + 1 : max;
  temp = 0;
}

console.log(max);
