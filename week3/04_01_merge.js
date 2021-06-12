let a = [1, 2, 3, 5];
let b = [4, 6, 7, 8];

function merge(arr1, arr2) {
  let resultAry = [];
  let arr1Index = 0;
  let arr2Index = 0;

  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      resultAry.push(arr1[arr1Index]);
      arr1Index++;
    } else {
      resultAry.push(arr2[arr2Index]);
      arr2Index++;
    }
  }

  if (arr1Index === arr1.length) {
    while (arr2Index < arr2.length) {
      resultAry.push(arr2[arr2Index]);
      arr2Index++;
    }
  }
  if (arr2Index === arr2.length) {
    while (arr1Index < arr1.length) {
      resultAry.push(arr1[arr1Index]);
      arr1Index++;
    }
  }

  return resultAry;
}

const result = merge(a, b);
console.log(result);
