// 올바른 괄호
// Q. 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻이다. 예를 들어

// ()() 또는 (())() 는 올바르다.
// )()( 또는 (()( 는 올바르지 않다.

// 이 때, '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 True 를 반환하고 아니라면 False 를 반환하시오.

function isCorrectParenthesis(string) {
  let count = 0;
  for (let char of string) {
    count = char === "(" ? count + 1 : count - 1;
    if (count < 0) return false;
  }
  return count === 0 ? true : false;
}

console.log("정답 = true / 현재 풀이 값 = ", isCorrectParenthesis("(())"));
console.log("정답 = false / 현재 풀이 값 = ", isCorrectParenthesis(")"));
console.log("정답 = false / 현재 풀이 값 = ", isCorrectParenthesis("((())))"));
console.log("정답 = false / 현재 풀이 값 = ", isCorrectParenthesis("())()"));
console.log("정답 = false / 현재 풀이 값 = ", isCorrectParenthesis("((())"));
