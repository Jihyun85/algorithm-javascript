// No.11651 좌표 정렬하기2
// 2차원 평면 위의 점 N개가 주어진다. 좌표를 y좌표가 증가하는 순으로, y좌표가 같으면 x좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

let input = ["5", "0 4", "1 2", "1 -1", "2 2", "3 3"];

let testCase = Number(input.shift());
let newAry = [];
for (let i = 0; i < testCase; i++) {
  newAry.push(input[i].split(" ").map((num) => parseInt(num)));
}

let result = "";

newAry.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

newAry.forEach((ary) => {
  result += `${ary[0]} ${ary[1]}\n`;
});

console.log(result);
