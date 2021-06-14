const input = "baaa";

function studyWord(word) {
  const alphabet = new Array(26).fill(0);

  let charAry = word.toLowerCase().split("");
  let asciiA = "a".charCodeAt();

  charAry.forEach((char) => {
    let asciiChar = char.charCodeAt();
    let index = asciiChar - asciiA;
    alphabet[index] += 1;
  });

  let maxNum = Math.max(...alphabet);
  let maxIndex = alphabet.indexOf(maxNum);
  let isSame = false;

  for (let i = 0; i < alphabet.length; i++) {
    if (maxNum === alphabet[i] && i !== maxIndex) {
      isSame = true;
    }
  }
  return isSame ? "?" : String.fromCharCode(maxIndex + asciiA).toUpperCase();
}

console.log(studyWord(input));
