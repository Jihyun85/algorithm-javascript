// No.11729 하노이의 탑

// ⭐입력 : 첫째 줄에 첫 번째 장대에 쌓인 원판의 개수 N (1 ≤ N ≤ 20)이 주어진다.

// ⭐출력
// : 첫째 줄에 옮긴 횟수 K를 출력한다.
// 두 번째 줄부터 수행 과정을 출력한다. 두 번째 줄부터 K개의 줄에 걸쳐 두 정수 A B를 빈칸을 사이에 두고 출력하는데, 이는 A번째 탑의 가장 위에 있는 원판을 B번째 탑의 가장 위로 옮긴다는 뜻이다.

// 재귀함수............... 재귀..... 재귀...........................  죽을 것 같다

let input = 4;

let result = "";
let count = 0;

function hanoi(start, mid, end, n) {
  if (n === 1) {
    result += start + " " + end + "\n";
    count++;
    return;
  }
  hanoi(start, end, mid, n - 1);
  hanoi(start, mid, end, 1);
  hanoi(mid, start, end, n - 1);
}

hanoi("1", "2", "3", input);

console.log(count);
console.log(result.trim());
