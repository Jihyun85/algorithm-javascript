// 농심 라면 공장

// 라면 공장에서는 하루에 밀가루를 1톤씩 사용합니다. 원래 밀가루를 공급받던 공장의 고장으로 앞으로 k일 이후에야 밀가루를 공급받을 수 있기 때문에 해외 공장에서 밀가루를 수입해야 합니다.

// 해외 공장에서는 향후 밀가루를 공급할 수 있는 날짜와 수량을 알려주었고, 라면 공장에서는 운송비를 줄이기 위해 최소한의 횟수로 밀가루를 공급받고 싶습니다.

// 현재 공장에 남아있는 밀가루 수량 stock, 밀가루 공급 일정(dates)과 해당 시점에 공급 가능한 밀가루 수량(supplies), 원래 공장으로부터 공급받을 수 있는 시점 k가 주어질 때, 밀가루가 떨어지지 않고 공장을 운영하기 위해서 최소한 몇 번 해외 공장으로부터 밀가루를 공급받아야 하는지를 반환 하시오.

// dates[i]에는 i번째 공급 가능일이 들어있으며, supplies[i]에는 dates[i] 날짜에 공급 가능한 밀가루 수량이 들어 있습니다

import { Heap } from "heap-js";

let stock = 4;
let dates = [4, 10, 15];
let supplies = [20, 5, 10];
let k = 30;

function getCount(stock, dates, supplies, k) {
  let lastAddedDateIndex = 0; // dates 배열 중 이번에 추가되기 시작할 index값
  let heap = []; // heap으로 사용할 배열(minHeap임 최솟값이 rootNode)
  let count = 0; // 구해야 할 값

  while (stock <= k) {
    // stock이 k보다 크면 더 이상 공급 받을 이유가 없음
    while (
      lastAddedDateIndex < dates.length && // dates.length 이상으로 넣을 수 없음 ㅎㅎ
      dates[lastAddedDateIndex] <= stock // 해당 날짜보다 stock이 많이 남아있어야 공백없이 버틸 수 있음
    ) {
      Heap.heappush(heap, -supplies[lastAddedDateIndex]); // 넣을 수 있는 만큼 heap에 넣음 (minHeap이므로 최댓값이 루트가 되도록 -를 곱해줌)
      lastAddedDateIndex += 1;
    }
    count++;
    let heappop = Heap.heappop(heap); // heappop을 하면 루트노드가 반환됨
    stock += -heappop;
  }
  return count;
}

console.log(getCount(stock, dates, supplies, k));
