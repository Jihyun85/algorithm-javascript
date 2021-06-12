// array 안에 해당 숫자가 있는지 파악하는 코드

let input = [3, 5, 6, 1, 2, 4];

function isNumberExist(number, array) {
  for (let i of array) {
    if (i === number) {
      return true;
    }
  }
  return false;
}

let result = isNumberExist(1, input);
console.log(result);
