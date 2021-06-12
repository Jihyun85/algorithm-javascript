// Q. 멜론에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 한다.

// 노래는 인덱스 구분하며, 노래를 수록하는 기준은 다음과 같다.

// 1. 속한 노래가 많이 재생된 장르를 먼저 수록한다. (단, 각 장르에 속한 노래의재생 수 총합은 모두 다르다.)

// 2. 장르 내에서 많이 재생된 노래를 먼저 수록한다.

// 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록한다.

// 노래의 장르를 나타내는 문자열 배열 genres와
// 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때,

// 베스트 앨범에 들어갈 노래의 인덱스를 순서대로 반환하시오.

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

function getMelonBestAlbum(genres, plays) {
  // 두개씩 모아서 수록 => array.length는 짝수!
  let genreObj = {};
  let indexObj = {};
  let resultAry = [];

  // 1. 가장 많이 재생된 장르
  // 2. 장르 내에서 많이 재생된 노래
  for (let i in genres) {
    genre = genres[i];
    play = plays[i];

    if (!genreObj[genre]) {
      genreObj[genre] = play;
      indexObj[genre] = [[i, play]];
    } else {
      genreObj[genre] += play;
      indexObj[genre].push([i, play]);
    }
  }

  // 3. 장르 내 고유번호가 낮은 노래
  genreAry = Object.entries(genreObj).sort((a, b) => b[1] - a[1]);
  Object.values(indexObj).forEach((arr) => arr.sort((a, b) => b[1] - a[1]));

  for (let genre of genreAry) {
    let indexAry = indexObj[genre];
  }

  return indexObj;
}

console.log(getMelonBestAlbum(genres, plays));

// ........................... 내일 다시 풀어보자............;;;;
