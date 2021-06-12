// ascii 코드로 변환 : charCodeAt 이용하기  a: 97 -> a: 0으로 바꿔야 하므로 어떤 문자의 인덱스를 찾는 방법은 해당 알파벳의 ascii 코드 - 97
// ascii 코드를 string으로 변환 : String.fromCharcode(____)

let input = "hello my name is sparta";
const a_ascii = "a".charCodeAt();

const alphabet_occurrence_array = [];

for (let i = 0; i < 26; i++) {
  alphabet_occurrence_array[i] = 0;
}

const string = input.replace(/ /g, "");

for (let char of string) {
  let i = char.charCodeAt() - a_ascii;
  alphabet_occurrence_array[i] += 1;
}

let max_occurance = 0;
let max_alphabet_index = 0;

for (let i = 0; i < alphabet_occurrence_array.length; i++) {
  alphabet_occurrence = alphabet_occurrence_array[i];
  if (alphabet_occurrence > max_occurance) {
    max_occurance = alphabet_occurrence;
    max_alphabet_index = i;
  }
}

let result = String.fromCharCode(max_alphabet_index + a_ascii);
console.log(result);
