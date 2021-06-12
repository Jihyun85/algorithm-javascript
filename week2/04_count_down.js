function countDown(number) {
  if (number < 0) {
    // 재귀함수를 쓸 때에는 탈출 조건을 반드시!!! 확인해주어야 한다. ✨✨✨✨
    return;
  }
  console.log(number);
  countDown(number - 1);
}

countDown(60);
