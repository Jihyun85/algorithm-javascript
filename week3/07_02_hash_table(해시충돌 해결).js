// https://mingcoder.me/2019/12/25/Programming/Algorithm/hash-table-implement/ 를 참고하여 구현하였습니다.

// 해시충돌을 해결한 해시 테이블

class HashTable {
  constructor(size = 100) {
    this.size = size;
    this.storage = new Array(this.size);
  }

  // data -> index  : 내 storage의 어느 자리에 놓을 것인가?
  getHash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i); // ascii 코드로 변환
    }
    return hash % this.size; // 해시 테이블은 처음 생성 시 size를 정해놓으므로 문제되지 않는다.
  }

  // 데이터 추가
  insert(key, value) {
    const index = this.getHash(key); // 추가할 데이터의 위치 잡기

    if (this.storage[index]) {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          return;
        }
      }
      this.storage[index].push([key, value]); // this.storage[index] = [[key1, value1], [key2, value2], [key3, value3]] 이런 형태!!
    } else {
      this.storage[index] = [[key, value]];
    }
  }

  // 데이터 가져오기
  get(key) {
    const index = this.getHash(key);

    if (this.storage[index]) {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) return this.storage[index][i];
      }
      return null;
    } else {
      return null;
    }
  }

  delete(key) {
    const index = this.getHash(key);

    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index].splice(i, 1);
        }
      }
    }
  }
}

const hashTable = new HashTable();
hashTable.insert("BH", 920506);
hashTable.insert("MS", 900326);
hashTable.insert("JM", 910522);

console.log(hashTable.get("BH"));

hashTable.delete("MS");
console.log(hashTable);
