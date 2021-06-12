// 반복되지 않는 문자의 첫번째 문자 반환

let input = "abadabac";

function findNotRepeatingFirstCharacter(string) {
  const a_ascii = "a".charCodeAt();

  const array = new Array(26);

  for (let i = 0; i < array.length; i++) {
    array[i] = 0;
  }

  for (let j = 0; j < input.length; j++) {
    let index = input[j].charCodeAt() - a_ascii;
    array[index] += 1;
  }

  let not_repeating_array = [];
  for (let k = 0; k < array.length; k++) {
    if (array[k] > 1) {
      console.log(k + a_ascii);
      not_repeating_array.push(String.fromCharCode(k + a_ascii));
    }
  }

  for (let char of input) {
    if (input.indexOf(char) >= 0) {
      return char;
    }
  }
}

const result = findNotRepeatingFirstCharacter(input);
console.log(result);
