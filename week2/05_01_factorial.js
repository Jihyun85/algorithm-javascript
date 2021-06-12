function factorial(n) {
  if (n === 1) {
    // 1일 때 탈출!!!
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(10));
