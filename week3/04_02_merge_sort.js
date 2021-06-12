const array = [5, 3, 2, 1, 6, 8, 7, 4];

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

function mergeSort(ary) {
  if (ary.length <= 1) {
    return ary;
  }

  let mid = Math.floor(ary.length / 2);
  let leftAry = ary.slice(0, mid);
  let rightAry = ary.slice(mid);

  return merge(mergeSort(leftAry), mergeSort(rightAry));
}

console.log(mergeSort(array));
