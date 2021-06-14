"use strict";
// No.1157 단어공부
// 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

// 입력 : 첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.
// 출력 : 첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

function studyWord(word) {
  const alphabet = new Array(26).fill(0); // 알파벳 공간 만들기

  let charAry = word.split(""); // 하나씩 쪼갬
  let asciiUpperA = "A".charCodeAt();
  let asciiLowerA = "a".charCodeAt();

  charAry.forEach((char) => {
    let charAscii = char.charCodeAt();
    let index = 0;
    if (charAscii >= 65 && charAscii <= 90) {
      index = charAscii - asciiUpperA;
    } else {
      index = charAscii - asciiLowerA;
    }
    alphabet[index] += 1;
  });

  let maxNum = 0;
  let maxIndex = 0;
  let double = false;

  for (let i = 0; i < alphabet.length; i++) {
    if (maxNum < alphabet[i]) {
      maxNum = alphabet[i];
      maxIndex = i;
      double = false;
    } else if (maxNum === alphabet[i]) {
      double = true;
    }
  }

  return double === true ? "?" : String.fromCharCode(maxIndex + asciiUpperA);
}

console.log(studyWord(input));
