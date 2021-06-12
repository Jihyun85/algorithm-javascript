// https://mingcoder.me/2019/12/25/Programming/Algorithm/hash-table-implement/ 를 참고하여 구현하였습니다.

// 충돌을 고려하지 않은 해쉬 테이블
{
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
      this.storage[index] = value;
    }

    // 데이터 가져오기
    get(key) {
      const index = this.getHash(key);
      return this.storage[index];
    }

    delete(key) {
      const index = this.getHash(key);
      delete this.storage[index];
    }
  }

  const hashTable = new HashTable();
  hashTable.insert("BH", 920506);
  hashTable.insert("MS", 900326);
  hashTable.insert("JM", 910522);

  console.log(hashTable.get("BH"));

  hashTable.delete("MS");
  console.log(hashTable);
}
