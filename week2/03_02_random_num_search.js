let numAry = [0, 3, 5, 6, 1, 2, 4];

function searchRandomNum(target, array) {
  const sortedAry = array.sort();
  let min = 0;
  let max = sortedAry.length - 1;
  let mid = Math.floor((min + max) / 2);

  while (min <= max) {
    if (sortedAry[mid] === target) {
      return true;
    } else if (sortedAry[mid] < target) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
    mid = Math.floor((min + max) / 2);
  }

  return false;
}

const result = searchRandomNum(2, numAry);
console.log(result);
