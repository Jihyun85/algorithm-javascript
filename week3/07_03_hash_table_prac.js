const allStudents = ["류진", "예지", "채령", "리아", "유나"];
const presentStudents = ["리아", "류진", "채령", "유나"];

// 시간복잡도 O(N)
function getAbsentStudent(allStudents, presentStudents) {
  let obj = {};
  let absentStudent;

  for (let student of allStudents) {
    obj[student] = true;
  }

  for (let presentStudent of presentStudents) {
    delete obj[presentStudent];
  }

  for (let key in obj) return key;
}

console.log(getAbsentStudent(allStudents, presentStudents));
