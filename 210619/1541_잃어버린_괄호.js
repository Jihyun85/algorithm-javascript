// No.1541 잃어버린 괄호
// 세준이는 양수와 +, -, 그리고 괄호를 가지고 식을 만들었다. 그리고 나서 세준이는 괄호를 모두 지웠다.
// 그리고 나서 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소로 만들려고 한다.
// 괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.

// ⭐입력 : 첫째 줄에 식이 주어진다. 식은 ‘0’~‘9’, ‘+’, 그리고 ‘-’만으로 이루어져 있고, 가장 처음과 마지막 문자는 숫자이다. 그리고 연속해서 두 개 이상의 연산자가 나타나지 않고, 5자리보다 많이 연속되는 숫자는 없다. 수는 0으로 시작할 수 있다. 입력으로 주어지는 식의 길이는 50보다 작거나 같다.

// ⭐출력 : 첫째 줄에 정답을 출력한다.

let formula = "1+1+1+1".split("");

let sum = 0;
let num = "";
let status = true; //true가 +, false가 -

for (let char of formula) {
  switch (char) {
    case "+":
      sum += Number(num);
      num = status ? "" : "-";
      break;
    case "-":
      status = false;
      sum += Number(num);
      num = "-";
      break;
    default:
      num += char;
  }
}

let result = sum + Number(num);
console.log(result);
