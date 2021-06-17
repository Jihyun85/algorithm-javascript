// No.18258 큐 2
// 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

// 명령은 총 여섯 가지이다.

// - push X: 정수 X를 큐에 넣는 연산이다.
// - pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// - size: 큐에 들어있는 정수의 개수를 출력한다.
// - empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// - front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// - back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

let input = [
  "15",
  "push 1",
  "push 2",
  "front",
  "back",
  "size",
  "empty",
  "pop",
  "pop",
  "pop",
  "size",
  "empty",
  "pop",
  "push 3",
  "empty",
  "front",
];

let queue = [];
let result = "";
let count = 0;
let startNode = 0; // 시간초과를 벗어나게 해준 사랑스러운 변수❤

function orderQueue(queue, orderAry) {
  switch (orderAry[0]) {
    case "push":
      queue.push(orderAry[1]);
      count++;
      break;
    case "pop":
      if (count !== 0) {
        result += `${queue[startNode]}\n`;
        startNode++;
        count--;
      } else {
        result += `-1\n`;
      }
      break;
    case "size":
      result += `${count}\n`;
      break;
    case "empty":
      result += count !== 0 ? `0\n` : `1\n`;
      break;
    case "front":
      result += count !== 0 ? `${queue[startNode]}\n` : `-1\n`;
      break;
    case "back":
      result += count !== 0 ? `${queue[startNode + count - 1]}\n` : `-1\n`;
      break;
    default:
      null;
  }
}

for (let i = 1; i <= Number(input[0]); i++) {
  let orderAry = input[i].split(" ");
  orderQueue(queue, orderAry);
}

console.log(result.trim());
